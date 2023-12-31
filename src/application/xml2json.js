/*
 Copyright 2011-2013 Abdulla Abdurakhmanov
 Original sources are available at https://code.google.com/p/x2js/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

export default function (config) {
  
    config = config || {};
    initConfigDefaults();
    initRequiredPolyfills();
    
    function initConfigDefaults() {
        if(config.escapeMode === undefined) {
            config.escapeMode = true;
        }
        
        config.attributePrefix = config.attributePrefix || "_";
        config.arrayAccessForm = config.arrayAccessForm || "none";
        config.emptyNodeForm = config.emptyNodeForm || "text";		
        
        if(config.enableToStringFunc === undefined) {
            config.enableToStringFunc = true; 
        }
        config.arrayAccessFormPaths = config.arrayAccessFormPaths || []; 
        if(config.skipEmptyTextNodesForObj === undefined) {
            config.skipEmptyTextNodesForObj = true;
        }
        if(config.stripWhitespaces === undefined) {
            config.stripWhitespaces = true;
        }
        config.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];

        if(config.useDoubleQuotes === undefined) {
            config.useDoubleQuotes = false;
        }
        
        config.xmlElementsFilter = config.xmlElementsFilter || [];
        config.jsonPropertiesFilter = config.jsonPropertiesFilter || [];
        
        if(config.keepCData === undefined) {
            config.keepCData = false;
        }
    }

    var DOMNodeTypes = {
        ELEMENT_NODE 	   : 1,
        TEXT_NODE    	   : 3,
        CDATA_SECTION_NODE : 4,
        COMMENT_NODE	   : 8,
        DOCUMENT_NODE 	   : 9
    };
    
    function initRequiredPolyfills() {		
    }
    
    function getNodeLocalName( node ) {
        var nodeLocalName = node.localName;			
        if(nodeLocalName == null) // Yeah, this is IE!! 
            nodeLocalName = node.baseName;
        if(nodeLocalName == null || nodeLocalName=="") // =="" is IE too
            nodeLocalName = node.nodeName;
        return nodeLocalName;
    }
    
    function getNodePrefix(node) {
        return node.prefix;
    }
        

    
    function checkInStdFiltersArrayForm(stdFiltersArrayForm, obj, name, path) {
        var idx = 0;
        for(; idx < stdFiltersArrayForm.length; idx++) {
            var filterPath = stdFiltersArrayForm[idx];
            if( typeof filterPath === "string" ) {
                if(filterPath == path)
                    break;
            }
            else
            if( filterPath instanceof RegExp) {
                if(filterPath.test(path))
                    break;
            }				
            else
            if( typeof filterPath === "function") {
                if(filterPath(obj, name, path))
                    break;
            }
        }
        return idx!=stdFiltersArrayForm.length;
    }
    
    function toArrayAccessForm(obj, childName, path) {
        switch(config.arrayAccessForm) {
            case "property":
                if(!(obj[childName] instanceof Array))
                    obj[childName+"_asArray"] = [obj[childName]];
                else
                    obj[childName+"_asArray"] = obj[childName];
                break;
            /*case "none":
                break;*/
        }
        
        if(!(obj[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {
            if(checkInStdFiltersArrayForm(config.arrayAccessFormPaths, obj, childName, path)) {
                obj[childName] = [obj[childName]];
            }			
        }
    }
    
    function fromXmlDateTime(prop) {
        // Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object
        // Improved to support full spec and optional parts
        var bits = prop.split(/[-T:+Z]/g);
        
        var d = new Date(bits[0], bits[1]-1, bits[2]);			
        var secondBits = bits[5].split("\.");
        d.setHours(bits[3], bits[4], secondBits[0]);
        if(secondBits.length>1)
            d.setMilliseconds(secondBits[1]);

        // Get supplied time zone offset in minutes
        if(bits[6] && bits[7]) {
            var offsetMinutes = bits[6] * 60 + Number(bits[7]);
            var sign = /\d\d-\d\d:\d\d$/.test(prop)? '-' : '+';

            // Apply the sign
            offsetMinutes = 0 + (sign == '-'? -1 * offsetMinutes : offsetMinutes);

            // Apply offset and local timezone
            d.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset())
        }
        else
            if(prop.indexOf("Z", prop.length - 1) !== -1) {
                d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));					
            }

        // d is now a local time equivalent to the supplied time
        return d;
    }
    
    function checkFromXmlDateTimePaths(value, childName, fullPath) {
        if(config.datetimeAccessFormPaths.length > 0) {
            var path = fullPath.split("\.#")[0];
            if(checkInStdFiltersArrayForm(config.datetimeAccessFormPaths, value, childName, path)) {
                return fromXmlDateTime(value);
            }
            else
                return value;			
        }
        else
            return value;
    }
    
    function checkXmlElementsFilter(obj, childType, childName, childPath) {
        if( childType == DOMNodeTypes.ELEMENT_NODE && config.xmlElementsFilter.length > 0) {
            return checkInStdFiltersArrayForm(config.xmlElementsFilter, obj, childName, childPath);	
        }
        else
            return true;
    }	

    function parseDOMChildren( node, path ) {
        if(node.nodeType == DOMNodeTypes.DOCUMENT_NODE) {
            var result = new Object;
            var nodeChildren = node.childNodes;
            // Alternative for firstElementChild which is not supported in some environments
            for(var cidx=0; cidx <nodeChildren.length; cidx++) {
                var child = nodeChildren.item(cidx);
                if(child.nodeType == DOMNodeTypes.ELEMENT_NODE) {
                    var childName = getNodeLocalName(child);
                    result[childName] = parseDOMChildren(child, childName);
                }
            }
            return result;
        }
        else
        if(node.nodeType == DOMNodeTypes.ELEMENT_NODE) {
            var result = new Object;
            result.__cnt=0;
            
            var nodeChildren = node.childNodes;
            
            // Children nodes
            for(var cidx=0; cidx <nodeChildren.length; cidx++) {
                var child = nodeChildren.item(cidx); // nodeChildren[cidx];
                var childName = getNodeLocalName(child);
                
                if(child.nodeType!= DOMNodeTypes.COMMENT_NODE) {
                    var childPath = path+"."+childName;
                    if (checkXmlElementsFilter(result,child.nodeType,childName,childPath)) {
                        result.__cnt++;
                        if(result[childName] == null) {
                            result[childName] = parseDOMChildren(child, childPath);
                            toArrayAccessForm(result, childName, childPath);					
                        }
                        else {
                            if(result[childName] != null) {
                                if( !(result[childName] instanceof Array)) {
                                    result[childName] = [result[childName]];
                                    toArrayAccessForm(result, childName, childPath);
                                }
                            }
                            (result[childName])[result[childName].length] = parseDOMChildren(child, childPath);
                        }
                    }
                }								
            }
            
            // Attributes
            for(var aidx=0; aidx <node.attributes.length; aidx++) {
                var attr = node.attributes.item(aidx); // [aidx];
                result.__cnt++;
                result[config.attributePrefix+attr.name]=attr.value;
            }
            
            // Node namespace prefix
            var nodePrefix = getNodePrefix(node);
            if(nodePrefix!=null && nodePrefix!="") {
                result.__cnt++;
                result.__prefix=nodePrefix;
            }
            
            if(result["#text"]!=null) {				
                result.__text = result["#text"];
                if(result.__text instanceof Array) {
                    result.__text = result.__text.join("\n");
                }
                //if(config.escapeMode)
                //	result.__text = unescapeXmlChars(result.__text);
                if(config.stripWhitespaces)
                    result.__text = result.__text.trim();
                delete result["#text"];
                if(config.arrayAccessForm=="property")
                    delete result["#text_asArray"];
                result.__text = checkFromXmlDateTimePaths(result.__text, childName, path+"."+childName);
            }
            if(result["#cdata-section"]!=null) {
                result.__cdata = result["#cdata-section"];
                delete result["#cdata-section"];
                if(config.arrayAccessForm=="property")
                    delete result["#cdata-section_asArray"];
            }
            
            if( result.__cnt == 0 && config.emptyNodeForm=="text" ) {
                result = '';
            }
            else
            if( result.__cnt == 1 && result.__text!=null  ) {
                result = result.__text;
            }
            else
            if( result.__cnt == 1 && result.__cdata!=null && !config.keepCData  ) {
                result = result.__cdata;
            }			
            else			
            if ( result.__cnt > 1 && result.__text!=null && config.skipEmptyTextNodesForObj) {
                if( (config.stripWhitespaces && result.__text=="") || (result.__text.trim()=="")) {
                    delete result.__text;
                }
            }
            delete result.__cnt;			
            
            if( config.enableToStringFunc && (result.__text!=null || result.__cdata!=null )) {
                result.toString = function() {
                    return (this.__text!=null? this.__text:'')+( this.__cdata!=null ? this.__cdata:'');
                };
            }
            
            return result;
        }
        else
        if(node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE) {
            return node.nodeValue;
        }	
    } 
    
    this.parseXmlString = function(xmlDocStr) {
        var isIEParser = window.ActiveXObject || "ActiveXObject" in window;
        if (xmlDocStr === undefined) {
            return null;
        }
        var xmlDoc;
        if (window.DOMParser) {
            var parser=new window.DOMParser();			
            var parsererrorNS = null;
            // IE9+ now is here
            if(!isIEParser) {
                try {
                    parsererrorNS = parser.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
                }
                catch(err) {					
                    parsererrorNS = null;
                }
            }
            try {
                xmlDoc = parser.parseFromString( xmlDocStr, "text/xml" );
                if( parsererrorNS!= null && xmlDoc.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
                    //throw new Error('Error parsing XML: '+xmlDocStr);
                    xmlDoc = null;
                }
            }
            catch(err) {
                xmlDoc = null;
            }
        }
        else {
            // IE :(
            if(xmlDocStr.indexOf("<?")==0) {
                xmlDocStr = xmlDocStr.substr( xmlDocStr.indexOf("?>") + 2 );
            }
            xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async="false";
            xmlDoc.loadXML(xmlDocStr);
        }
        return xmlDoc;
    };
    
    this.asArray = function(prop) {
        if (prop === undefined || prop == null)
            return [];
        else
        if(prop instanceof Array)
            return prop;
        else
            return [prop];
    };
    
    this.toXmlDateTime = function(dt) {
        if(dt instanceof Date)
            return dt.toISOString();
        else
        if(typeof(dt) === 'number' )
            return new Date(dt).toISOString();
        else	
            return null;
    };
    
    this.asDateTime = function(prop) {
        if(typeof(prop) == "string") {
            return fromXmlDateTime(prop);
        }
        else
            return prop;
    };

    this.xml2json = function (xmlDoc) {
        return parseDOMChildren ( xmlDoc );
    };
    
    this.xml_str2json = function (xmlDocStr) {
        var xmlDoc = this.parseXmlString(xmlDocStr);
        if(xmlDoc!=null)
            return this.xml2json(xmlDoc);
        else
            return null;
    }; 
}