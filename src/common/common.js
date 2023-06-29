







export function numberFormat(num = '', decimals = 2, info) {
	const { pre = '', suf = '', currency = true, init = '-' } = typeof info === 'object' ? info : { currency: false };
	if (num === '' || num === null || Number.isNaN(+num)) {
        console.error('Incoming amount is empty or does not meet the requirements');
	    return num || init;
	}
 
    const value = Number(num).toFixed(decimals)
    const isDot = String(value).split('.').length > 1;
    const [reg1, reg2] = [/\B(?=(\d{3})+(?!\d))/g,  /(\d)(?=(\d{3})+\.)/g]; 
    const text = value.replace(isDot ? reg2 : reg1, currency ? '$1,' : '$1')

	return pre + text + suf
}

export const dateFormat = function(input) { 
    const date = new Date( input || Date.now())
    const formatType = {
        Y: date.getFullYear(),
        M: date.getMonth() + 1,
        D: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
    }
    
      return {
          format:(formatStr)=>{
            return formatStr ? formatStr.replace(
                /Y+|M+|D+|h+|m+|s+/g,
                target => (new Array(target.length).join('0') + formatType[target[0]]).substr(-target.length)
            ): date.getTime()
          }
      }
}
 

/**
 * 获取文件base64编码
 */
export function onGetBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) reject(null)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}


export function onUUID (name = ''){
    const uid = Math.random().toString(36).slice(2, 11)
    return name ? name + uid.slice(-7) : uid
}


export function classes(init, ...names){
    return [init, ...names]?.filter(Boolean).join(' ');
}


// export function onCookie(name){
//     return `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
// }


export const onCookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();


export const transpose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]));
// transpose(
//     [              // [
//         [1, 2, 3], //      [1, 4, 7],
//         [4, 5, 6], //      [2, 5, 8],
//         [7, 8, 9], //      [3, 6, 9],
//      ]             //  ]
//  ); 

function onGetScroll(win, top) {
    const [x, t] = top ? ['Y', 'Top'] : ['X', 'Left']
    let [ret, met] = [`page${x}Offset`, `scroll${t}`] 

    ret = win[ret]
    if (typeof ret !== 'number') {
        const doc = win.document;
        ret = doc.documentElement[met];
        if (typeof ret !== 'number') {
            ret = doc.body[met];
        }
    }

    return ret;
}


export function offset(el){
    const rect = el.getBoundingClientRect();
    const pos = { left: rect.left,  top: rect.top };
    const doc = el.ownerDocument;
    const win = doc.defaultView || doc.parentWindow;

    pos.top += onGetScroll(win, true);
    pos.left +=onGetScroll(win, false);
    return pos;
}


export const mediator = (function () {
    let topics = [], uuid = 0;

    function subscribe (topic, callback) {
        uuid ++
        topics[topic] = topics[topic]
            ? [...topics[topic], { callback, uuid }]
            : [{ callback, uuid }]
    }

    function publish (topic, value) {
        if (topics[topic]) {
            topics[topic].map(item => item.callback(value))
        }
    }

    function remove (topic, callback) {  
        if (topics[topic]) { 
            delete topics[topic]
        }
        callback();
    }

    function current (){
        let arg = []
        for(item in topics) 
        arg.push(item)
        return arg
    }

    return { 
        install: function (obj) {
            obj.remove = remove
            obj.current = current
            obj.uuid = uuid
            obj.publish = publish
            obj.subscribe = subscribe 
            return obj
        } 
    }
})()


 



