function ___$insertStylesToHeader(css) {
    if (!css) {
      return
    }
    if (typeof window === 'undefined') {
      return
    }
  
    const style = document.createElement('style');
  
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css
  }
  
  /******************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  
  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }
  
  function anonymous$1(locals, escapeFn, include, rethrow
  ) {
  rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
    var lines = str.split('\n');
    var start = Math.max(lineno - 3, 0);
    var end = Math.min(lines.length, lineno + 3);
    var filename = esc(flnm);
    // Error context
    var context = lines.slice(start, end).map(function (line, i){
      var curr = i + start + 1;
      return (curr == lineno ? ' >> ' : '    ')
        + curr
        + '| '
        + line;
    }).join('\n');
  
    // Alter exception message
    err.path = filename;
    err.message = (filename || 'ejs') + ':'
      + lineno + '\n'
      + context + '\n\n'
      + err.message;
  
    throw err;
  };
  escapeFn = escapeFn || function (markup) {
    return markup == undefined
      ? ''
      : String(markup)
        .replace(_MATCH_HTML, encode_char);
  };
  var _ENCODE_HTML_RULES = {
        "&": "&amp;"
      , "<": "&lt;"
      , ">": "&gt;"
      , '"': "&#34;"
      , "'": "&#39;"
      }
    , _MATCH_HTML = /[&<>'"]/g;
  function encode_char(c) {
    return _ENCODE_HTML_RULES[c] || c;
  }var __line = 1
    , __lines = "<!-- prettier-ignore -->\n<video \n  class=\"tp-video\"\n  crossorigin=\"anonymous\"\n  webkit-playsinline\n  playsinline\n  src=\"<%= locals.src %>\" \n  <% if(locals?.controlOptions?.nativeControls){ %> controls <% } %> \n  <% if(locals.autoplay){ %> autoplay <% } %> \n  <% if(locals.muted){ %> muted <% } %> \n  <% if(locals.airplay){ %> airplay <% } %> \n  <% if(locals.airplay){ %> x-webkit-airplay=\"allow\" <% } %> \n  <% if(locals.preload){ %> src=\"<%= locals.preload %>\" <% } %> \n  <% if(locals.poster){ %> poster=\"<%= locals.poster %>\" <% } %> \n  <% if(locals.volume){ %> src=\"<%= locals.volume %>\" <% } %> \n  <% if(locals.playbackSpeed){ %> src=\"<%= locals.playbackSpeed %>\" <% } %> \n  <% if(locals.anonymous){ %> src=\"<%= locals.anonymous %>\" <% } %> \n>\n  你的浏览器不支持 video 标签，换个浏览器试试？\n</video>\n<!-- 水印 -->\n<div class=\"tp-watermark\" style=\"display: none\"></div>\n"
    , __filename = undefined;
  try {
    var __output = "";
    function __append(s) { if (s !== undefined && s !== null) __output += s; }
      ; __append("<!-- prettier-ignore -->\n<video \n  class=\"tp-video\"\n  crossorigin=\"anonymous\"\n  webkit-playsinline\n  playsinline\n  src=\"")
      ; __line = 7
      ; __append(escapeFn( locals.src ))
      ; __append("\" \n  ")
      ; __line = 8
      ;  if(locals?.controlOptions?.nativeControls){ 
      ; __append(" controls ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 9
      ;  if(locals.autoplay){ 
      ; __append(" autoplay ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 10
      ;  if(locals.muted){ 
      ; __append(" muted ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 11
      ;  if(locals.airplay){ 
      ; __append(" airplay ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 12
      ;  if(locals.airplay){ 
      ; __append(" x-webkit-airplay=\"allow\" ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 13
      ;  if(locals.preload){ 
      ; __append(" src=\"")
      ; __append(escapeFn( locals.preload ))
      ; __append("\" ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 14
      ;  if(locals.poster){ 
      ; __append(" poster=\"")
      ; __append(escapeFn( locals.poster ))
      ; __append("\" ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 15
      ;  if(locals.volume){ 
      ; __append(" src=\"")
      ; __append(escapeFn( locals.volume ))
      ; __append("\" ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 16
      ;  if(locals.playbackSpeed){ 
      ; __append(" src=\"")
      ; __append(escapeFn( locals.playbackSpeed ))
      ; __append("\" ")
      ;  } 
      ; __append(" \n  ")
      ; __line = 17
      ;  if(locals.anonymous){ 
      ; __append(" src=\"")
      ; __append(escapeFn( locals.anonymous ))
      ; __append("\" ")
      ;  } 
      ; __append(" \n>\n  你的浏览器不支持 video 标签，换个浏览器试试？\n</video>\n<!-- 水印 -->\n<div class=\"tp-watermark\" style=\"display: none\"></div>\n")
      ; __line = 23;
    return __output;
  } catch (e) {
    rethrow(e, __lines, __filename, __line, escapeFn);
  }
  
  }
  
  ___$insertStylesToHeader(".tp-watermark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: 100%;\n  pointer-events: none; }\n\n.tp-hide-controller .tp-control-panel {\n  display: none; }\n\n.tp-control-panel {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0; }\n  .tp-control-panel .tp-play-icon,\n  .tp-control-panel .tp-loading {\n    color: white;\n    cursor: pointer;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    box-sizing: border-box;\n    display: grid;\n    place-content: center; }\n    .tp-control-panel .tp-play-icon svg,\n    .tp-control-panel .tp-loading svg {\n      width: 50px;\n      height: 50px; }\n\n@keyframes tp-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n  .tp-control-panel .tp-loading {\n    pointer-events: none;\n    background-color: rgba(255, 255, 255, 0.4); }\n    .tp-control-panel .tp-loading svg {\n      animation: tp-loading 1s infinite;\n      width: 40px;\n      height: 40px; }\n  .tp-control-panel .tp-control-bar {\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    width: 100%;\n    height: 35px;\n    user-select: none;\n    transition: all 0.3s ease;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.4));\n    color: white;\n    padding: 0 10px;\n    box-sizing: border-box;\n    display: flex;\n    gap: 8px;\n    justify-content: space-between;\n    align-items: center; }\n    .tp-control-panel .tp-control-bar .tp-seek-slider {\n      width: 100%;\n      flex: 1; }\n    .tp-control-panel .tp-control-bar .tp-volume-bar {\n      width: 80px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n    .tp-control-panel .tp-control-bar .tp-volume-icon,\n    .tp-control-panel .tp-control-bar .tp-fullscreen {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      color: white; }\n    .tp-control-panel .tp-control-bar .tp-volume-slider {\n      width: 60px; }\n    .tp-control-panel .tp-control-bar .tp-play-time {\n      font-family: Menlo, Courier New, Consolas, Lucida Console, Courier, monospace;\n      font-size: 14px;\n      text-align: center;\n      user-select: none;\n      min-width: 120px; }\n    .tp-control-panel .tp-control-bar .tp-play-time-tip {\n      display: none;\n      width: 50px;\n      text-align: center;\n      position: absolute;\n      top: -30px;\n      left: -10px;\n      pointer-events: none;\n      background-color: #000;\n      color: #fff;\n      padding: 5px;\n      border-radius: 4px;\n      font-size: 14px; }\n      .tp-control-panel .tp-control-bar .tp-play-time-tip::after {\n        content: '';\n        position: absolute;\n        top: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: #000 transparent transparent transparent; }\n\n.tp-control-bar input[type='range'] {\n  height: 20px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  margin: 10px 0;\n  cursor: pointer; }\n  .tp-control-bar input[type='range']:focus {\n    outline: none; }\n  .tp-control-bar input[type='range']::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    box-shadow: 0px 0px 0px #000000;\n    background: #d3d3d3;\n    border-radius: 1px;\n    border: 0px solid #000000; }\n  .tp-control-bar input[type='range']::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    box-shadow: 0px 0px 0px #000000;\n    background: #d3d3d3;\n    border-radius: 1px;\n    border: 0px solid #000000; }\n  .tp-control-bar input[type='range']::-ms-track {\n    width: 100%;\n    height: 4px;\n    box-shadow: 0px 0px 0px #000000;\n    background: #d3d3d3;\n    border-radius: 1px;\n    border: 0px solid #000000; }\n  .tp-control-bar input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    box-shadow: 0px 0px 0px #000000;\n    border: 1px solid #0163a5;\n    height: 12px;\n    width: 12px;\n    border-radius: 20px;\n    margin-top: -4px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }\n  .tp-control-bar input[type='range']::-moz-range-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    box-shadow: 0px 0px 0px #000000;\n    border: 1px solid #0163a5;\n    height: 12px;\n    width: 12px;\n    border-radius: 20px;\n    margin-top: -4px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }\n  .tp-control-bar input[type='range']::-ms-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    box-shadow: 0px 0px 0px #000000;\n    border: 1px solid #0163a5;\n    height: 12px;\n    width: 12px;\n    border-radius: 20px;\n    margin-top: -4px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }\n  .tp-control-bar input[type='range']::-webkit-slider-container {\n    overflow: hidden; }\n\n.tp-container {\n  position: relative;\n  overflow: hidden; }\n\n.tp-video {\n  width: 100%;\n  height: 100%;\n  transform: translate(0px, 0px); }\n");
  
  var play = "<svg viewBox=\"0 0 56 56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M44.14 11.437a23.03 23.03 0 00-16.352-6.77 23.025 23.025 0 00-16.347 6.77 22.992 22.992 0 00-4.956 7.352 22.963 22.963 0 00-1.818 9c0 3.122.61 6.152 1.818 9.004a22.976 22.976 0 004.956 7.348 22.996 22.996 0 007.348 4.955 22.963 22.963 0 009 1.819 22.96 22.96 0 009.004-1.819 23.037 23.037 0 007.348-4.955 22.976 22.976 0 004.955-7.348 22.967 22.967 0 001.819-9.004c0-3.119-.611-6.148-1.819-9a22.992 22.992 0 00-4.955-7.352z\" stroke-opacity=\".6\" stroke=\"#FFF\" fill=\"#1B2337\" opacity=\".6\"/><path d=\"M23.524 37.109a1.68 1.68 0 01-1.684 0 1.683 1.683 0 01-.84-1.456V20.349c0-.6.32-1.158.84-1.456a1.68 1.68 0 011.684 0l13.251 7.65a1.684 1.684 0 010 2.914L23.524 37.11z\" fill=\"#FFF\"/></g></svg>";
  
  var pause = "<svg viewBox=\"0 0 56 56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M49.498 18.917a23.2 23.2 0 00-5-7.419 23.238 23.238 0 00-16.5-6.832 23.234 23.234 0 00-16.496 6.832 23.2 23.2 0 00-5 7.419 23.17 23.17 0 00-1.835 9.081c0 3.15.616 6.208 1.835 9.085a23.184 23.184 0 005 7.415 23.204 23.204 0 007.415 5 23.17 23.17 0 009.081 1.835c3.15 0 6.208-.616 9.085-1.835a23.245 23.245 0 007.415-5 23.184 23.184 0 005-7.415 23.175 23.175 0 001.835-9.085 23.17 23.17 0 00-1.835-9.081\" stroke-opacity=\".6\" stroke=\"#FFF\" fill=\"#1B2337\" opacity=\".6\"/><path d=\"M21.467 37.333V18.667h4.2v18.666h-4.2zm13.066-18.666v18.666h-4.2V18.667h4.2z\" fill=\"#FFF\"/></g></svg>";
  
  var volumeUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16zm4.576 0q0 2.72-1.536 5.056t-4 3.36q-.256.096-.448.096-.48 0-.832-.352t-.32-.8q0-.704.672-1.056 1.024-.512 1.376-.8 1.312-.96 2.048-2.4T22.848 16t-.736-3.104-2.048-2.4q-.352-.288-1.376-.8-.672-.352-.672-1.056 0-.448.32-.8t.8-.352q.224 0 .48.096 2.496 1.056 4 3.36T25.152 16z\"/></svg>";
  
  var volumeDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16z\"/></svg>";
  
  var volumeOff = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8z\"/></svg>";
  
  var full = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 33\" fill=\"white\"><path d=\"M6.667 28H1.334c-.8 0-1.333-.533-1.333-1.333v-5.333c0-.8.533-1.333 1.333-1.333s1.333.533 1.333 1.333v4h4c.8 0 1.333.533 1.333 1.333S7.467 28 6.667 28zm24 0h-5.333c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h4v-4c0-.8.533-1.333 1.333-1.333S32 20.534 32 21.334v5.333c0 .8-.533 1.333-1.333 1.333zm0-16c-.8 0-1.333-.533-1.333-1.333v-4h-4c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333v5.333c0 .8-.533 1.333-1.333 1.333zM1.333 12C.533 12 0 11.467 0 10.667V5.334c0-.8.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333s-.533 1.333-1.333 1.333h-4v4c0 .8-.533 1.333-1.333 1.333z\"/></svg>";
  
  var fullWeb = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 33\" fill=\"white\"><path d=\"M24.965 24.38H6.833a2.482 2.482 0 01-2.478-2.478V10.096a2.482 2.482 0 012.478-2.478h18.132a2.482 2.482 0 012.478 2.478v11.806a2.481 2.481 0 01-2.478 2.478zM6.833 10.097v11.806h18.134l-.002-11.806H6.833zM2.478 28.928H8.43a1.238 1.238 0 100-2.477H2.478v-5.802a1.239 1.239 0 10-2.477 0v5.802a2.481 2.481 0 002.478 2.478zm28.283-9.516c-.684 0-1.238.554-1.238 1.238v5.801h-5.951a1.237 1.237 0 100 2.477h5.951a2.48 2.48 0 002.478-2.478v-5.801c0-.683-.554-1.238-1.239-1.238zM0 5.55v5.802a1.238 1.238 0 002.476 0V5.55h5.952a1.238 1.238 0 100-2.476H2.477A2.48 2.48 0 00-.001 5.55zm32 5.8V5.549a2.48 2.48 0 00-2.478-2.478h-5.951a1.237 1.237 0 100 2.476h5.951v5.801c0 .683.554 1.237 1.238 1.237a1.235 1.235 0 001.239-1.236z\"/></svg>";
  
  var setting = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 28\" fill=\"white\"><path d=\"M28.633 17.104c.035.21.026.463-.026.76s-.14.598-.262.904c-.122.306-.271.581-.445.825s-.367.419-.576.524c-.209.105-.393.157-.55.157s-.332-.035-.524-.105c-.175-.052-.393-.1-.655-.144s-.528-.052-.799-.026-.541.083-.812.17-.502.236-.694.445c-.419.437-.664.934-.734 1.493s.009 1.092.236 1.598c.175.349.148.699-.079 1.048-.105.14-.271.284-.498.432s-.476.284-.747.406-.555.218-.851.288c-.297.07-.559.105-.786.105-.157 0-.306-.061-.445-.183s-.236-.253-.288-.393h-.026c-.192-.541-.52-1.009-.982-1.402s-1-.589-1.611-.589c-.594 0-1.131.197-1.611.589s-.816.851-1.009 1.375c-.087.21-.218.362-.393.458s-.367.144-.576.144c-.244 0-.52-.044-.825-.131s-.611-.197-.917-.327c-.306-.131-.581-.284-.825-.458s-.428-.349-.55-.524c-.087-.122-.135-.266-.144-.432s.057-.397.197-.694c.192-.402.266-.86.223-1.375s-.266-.991-.668-1.428c-.244-.262-.541-.432-.891-.511s-.681-.109-.995-.092a4.358 4.358 0 00-1.127.21c-.244.07-.489.052-.734-.052-.192-.07-.371-.231-.537-.485a5.48 5.48 0 01-.746-1.781c-.07-.323-.087-.59-.052-.799.052-.384.227-.629.524-.734.524-.21.995-.555 1.415-1.035s.629-1.017.629-1.611c0-.611-.21-1.144-.629-1.598s-.891-.786-1.415-.996c-.157-.052-.288-.179-.393-.38s-.157-.406-.157-.616c0-.227.035-.48.105-.76s.162-.55.275-.812.244-.502.393-.72c.148-.218.31-.38.485-.485.14-.087.275-.122.406-.105s.275.052.432.105c.524.21 1.07.275 1.637.197s1.07-.327 1.506-.747c.21-.209.362-.467.458-.773s.157-.607.183-.904c.026-.297.026-.568 0-.812s-.048-.419-.065-.524c-.035-.105-.066-.227-.092-.367s-.013-.262.039-.367c.105-.244.293-.458.563-.642s.563-.336.878-.458c.314-.122.62-.214.917-.275s.533-.092.707-.092c.227 0 .406.074.537.223s.223.301.275.458c.192.471.507.886.943 1.244s.952.537 1.546.537c.611 0 1.153-.17 1.624-.511s.803-.773.996-1.297c.07-.14.179-.284.327-.432s.301-.223.458-.223c.244 0 .511.035.799.105s.572.166.851.288c.279.122.537.279.773.472s.423.402.563.629c.087.14.113.293.079.458s-.07.284-.105.354c-.227.506-.297 1.039-.21 1.598s.341 1.048.76 1.467c.419.419.934.651 1.546.694s1.179-.057 1.703-.301c.14-.087.31-.122.511-.105s.371.096.511.236c.262.244.493.616.694 1.113s.336 1 .406 1.506c.035.297-.013.528-.144.694s-.266.275-.406.327c-.542.192-1.004.528-1.388 1.009s-.576 1.026-.576 1.637c0 .594.162 1.113.485 1.559s.747.764 1.27.956c.122.07.227.14.314.21.192.157.323.358.393.602zm-12.182 2.358c.786 0 1.528-.149 2.227-.445s1.305-.707 1.821-1.231c.515-.524.921-1.131 1.218-1.821s.445-1.428.445-2.214-.148-1.524-.445-2.214-.703-1.292-1.218-1.808c-.515-.515-1.122-.921-1.821-1.218s-1.441-.445-2.227-.445c-.786 0-1.524.148-2.214.445s-1.292.703-1.808 1.218c-.515.515-.921 1.118-1.218 1.808s-.445 1.428-.445 2.214.149 1.524.445 2.214.703 1.297 1.218 1.821 1.118.934 1.808 1.231 1.428.445 2.214.445z\"/></svg>";
  
  var right = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M22 16L11.895 5.4 10 7.387 18.211 16 10 24.612l1.895 1.988 8.211-8.613z\"/></svg>";
  
  var camera = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm11 15H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h3a1 1 0 010 2H5c-.551 0-1 .449-1 1v16c0 .552.449 1 1 1h22a1 1 0 001-1V9c0-.551-.448-1-1-1H16a1 1 0 010-2h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zm-3-17.5a1.5 1.5 0 103.001-.001A1.5 1.5 0 0024 10.5zM15 4a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1z\"/></svg>";
  
  var airplay = "<svg viewBox=\"0 0 288 288\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"white\"><path d=\"M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z\"/></svg>";
  
  var loading = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z\"/></svg>";
  
  const Icons = {
      play: play,
      pause: pause,
      volumeUp: volumeUp,
      volumeDown: volumeDown,
      volumeOff: volumeOff,
      full: full,
      fullWeb: fullWeb,
      setting: setting,
      right: right,
      camera: camera,
      loading: loading,
      airplay: airplay,
  };
  
  function anonymous(locals, escapeFn, include, rethrow
  ) {
  rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
    var lines = str.split('\n');
    var start = Math.max(lineno - 3, 0);
    var end = Math.min(lines.length, lineno + 3);
    var filename = esc(flnm);
    // Error context
    var context = lines.slice(start, end).map(function (line, i){
      var curr = i + start + 1;
      return (curr == lineno ? ' >> ' : '    ')
        + curr
        + '| '
        + line;
    }).join('\n');
  
    // Alter exception message
    err.path = filename;
    err.message = (filename || 'ejs') + ':'
      + lineno + '\n'
      + context + '\n\n'
      + err.message;
  
    throw err;
  };
  escapeFn = escapeFn || function (markup) {
    return markup == undefined
      ? ''
      : String(markup)
        .replace(_MATCH_HTML, encode_char);
  };
  var _ENCODE_HTML_RULES = {
        "&": "&amp;"
      , "<": "&lt;"
      , ">": "&gt;"
      , '"': "&#34;"
      , "'": "&#39;"
      }
    , _MATCH_HTML = /[&<>'"]/g;
  function encode_char(c) {
    return _ENCODE_HTML_RULES[c] || c;
  }var __line = 1
    , __lines = "<!-- 控制面板 -->\n\n<!-- 播放按钮 -->\n<div class=\"tp-play-icon\"></div>\n<!-- 底部控制栏 -->\n<div class=\"tp-control-bar\">\n  <!-- 进度条 -->\n  <input type=\"range\" class=\"tp-seek-slider\" min=\"0\" max=\"100\" step=\"any\" value=\"0\" />\n  <span class=\"tp-play-time-tip\">0.0s</span>\n\n  <!-- 播放时间 -->\n  <% if(locals.playTime){ %>\n  <span class=\"tp-play-time\">00:00 / 00:00</span>\n  <% } %>\n\n  <!-- 音量控制 -->\n  <% if(locals.volumeControl){ %>\n  <div class=\"tp-volume-bar\">\n    <i class=\"tp-volume-icon\"></i>\n    <input type=\"range\" class=\"tp-volume-slider\" min=\"0\" max=\"1\" step=\"0.01\" value=\"<%= locals.volume %>\" />\n  </div>\n  <% } %>\n\n  <!-- 全屏 -->\n  <% if(locals.fullScreenControl){ %>\n  <i class=\"tp-fullscreen\"></i>\n  <% } %>\n</div>\n<!-- 加载动画 -->\n<div class=\"tp-loading\"></div>\n"
    , __filename = undefined;
  try {
    var __output = "";
    function __append(s) { if (s !== undefined && s !== null) __output += s; }
      ; __append("<!-- 控制面板 -->\n\n<!-- 播放按钮 -->\n<div class=\"tp-play-icon\"></div>\n<!-- 底部控制栏 -->\n<div class=\"tp-control-bar\">\n  <!-- 进度条 -->\n  <input type=\"range\" class=\"tp-seek-slider\" min=\"0\" max=\"100\" step=\"any\" value=\"0\" />\n  <span class=\"tp-play-time-tip\">0.0s</span>\n\n  <!-- 播放时间 -->\n  ")
      ; __line = 12
      ;  if(locals.playTime){ 
      ; __append("\n  <span class=\"tp-play-time\">00:00 / 00:00</span>\n  ")
      ; __line = 14
      ;  } 
      ; __append("\n\n  <!-- 音量控制 -->\n  ")
      ; __line = 17
      ;  if(locals.volumeControl){ 
      ; __append("\n  <div class=\"tp-volume-bar\">\n    <i class=\"tp-volume-icon\"></i>\n    <input type=\"range\" class=\"tp-volume-slider\" min=\"0\" max=\"1\" step=\"0.01\" value=\"")
      ; __line = 20
      ; __append(escapeFn( locals.volume ))
      ; __append("\" />\n  </div>\n  ")
      ; __line = 22
      ;  } 
      ; __append("\n\n  <!-- 全屏 -->\n  ")
      ; __line = 25
      ;  if(locals.fullScreenControl){ 
      ; __append("\n  <i class=\"tp-fullscreen\"></i>\n  ")
      ; __line = 27
      ;  } 
      ; __append("\n</div>\n<!-- 加载动画 -->\n<div class=\"tp-loading\"></div>\n")
      ; __line = 31;
    return __output;
  } catch (e) {
    rethrow(e, __lines, __filename, __line, escapeFn);
  }
  
  }
  
  // 节流
  const throttle = (fn, delay) => {
      let timer = null;
      return (...args) => {
          if (timer) {
              return;
          }
          timer = setTimeout(() => {
              fn(...args);
              timer = null;
          }, delay);
      };
  };
  // 格式化时间为 00:00 toFixed有值时 则格式化为00:00.x
  const formatTime = (secondTime, fractionDigits) => {
      const baseFractionDigits = Math.pow(10, fractionDigits !== null && fractionDigits !== void 0 ? fractionDigits : 0);
      if (secondTime < 59.9) {
          return `${secondTime.toFixed(1)}s`;
      }
      const m = Math.floor(secondTime / 60);
      const s = Math.floor((secondTime % 60) * baseFractionDigits) / baseFractionDigits;
      return `${m}:${s < 10 ? `0${s}` : s}`;
  };
  // 是否是移动端
  const isMobile = /mobile/i.test(window.navigator.userAgent);
  // 解析秒到时间字符串 00:00 or 00:00:00
  const secondToTime = (second) => {
      second = second || 0;
      if (second === 0 || second === Infinity || second.toString() === 'NaN') {
          return '00:00';
      }
      const add0 = (num) => (num < 10 ? '0' + num : '' + num);
      const hour = Math.floor(second / 3600);
      const min = Math.floor((second - hour * 3600) / 60);
      const sec = Math.floor(second - hour * 3600 - min * 60);
      return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
  };
  
  class Controller {
      constructor(player) {
          this.disableAutoHide = false; // 禁用自动隐藏
          this.playRaf = 0; // 播放 requestAnimationFrame Id
          // 初始化播放器控制条
          this.initControls = () => {
              // 控制面板节点
              this.controlElement = document.createElement('div');
              this.controlElement.className = 'tp-control-panel';
              this.controlElement.innerHTML = anonymous(Object.assign(Object.assign({}, (this.player.options.controlOptions || {})), { volume: this.player.options.volume }));
              // 将控制面板添加到目标容器中
              !this.controlOptions.manualMount && !this.controlOptions.nativeControls && this.mountTarget.appendChild(this.controlElement);
              // loading 动画
              this.loading = this.controlElement.querySelector('.tp-loading');
              this.loading.innerHTML = Icons.loading;
              this.loading.style.opacity = '0';
              this.bottomControlBar = this.controlElement.querySelector('.tp-control-bar');
              this.bottomControlBar.addEventListener('mousedown', (event) => event.stopPropagation());
              this.initPlayButton();
              this.initSeekBar();
              this.initVolumeButton();
              this.initFullScreenButton();
              // 其他
              // if (!this.player.options.controlOptions) {}
          };
          // 初始化播放按钮
          this.initPlayButton = () => {
              // 设置控制条按钮的事件处理函数
              this.playButton = this.controlElement.querySelector('.tp-play-icon');
              this.playButton.innerHTML = Icons.play;
              this.playButton.addEventListener('click', this.player.togglePlay);
          };
          // 初始化播放进度条
          this.initSeekBar = () => {
              // 设置控制条滑块的事件处理函数
              this.seekBar = this.controlElement.querySelector('.tp-seek-slider');
              let playStatus = false;
              // 记录当前播放状态，并暂停播放
              const pausePlay = (event) => {
                  event.stopPropagation();
                  // 记录当前播放状态
                  playStatus = !this.player.video.paused;
                  // 先暂停播放
                  this.player.pause();
              };
              // 恢复播放状态
              const resumePlay = (event) => {
                  event.stopPropagation();
                  // 恢复播放状态
                  playStatus && this.player.play();
              };
              this.seekBar.addEventListener('mousedown', pausePlay);
              this.seekBar.addEventListener('mouseup', resumePlay);
              this.seekBar.addEventListener('touchstart', pausePlay);
              this.seekBar.addEventListener('touchend', resumePlay);
              this.seekBar.addEventListener('touchmove', (event) => event.stopPropagation());
              this.seekBar.addEventListener('input', this.onSeeking);
              this.playTime = this.controlElement.querySelector('.tp-play-time');
          };
          // 初始化音量控制栏
          this.initVolumeButton = () => {
              const volume = this.player.options.volume ? (this.player.options.volume > 1 ? this.player.options.volume / 100 : this.player.options.volume) : 1;
              this.player.video.volume = volume;
              if (!this.controlOptions.volumeControl)
                  return;
              // 设置控制条声音控制栏的事件处理函数
              this.muteButton = this.controlElement.querySelector('.tp-volume-icon');
              this.muteButton.addEventListener('click', this.player.mute);
              this.switchVolumeIcon();
              this.volumeSlider = this.controlElement.querySelector('.tp-volume-slider');
              this.volumeSlider.addEventListener('input', throttle(this.onVolumeChange, 100));
              this.volumeControlBar = this.controlElement.querySelector('.tp-volume-bar');
          };
          // 初始化全屏按钮
          this.initFullScreenButton = () => {
              // 设置控制条全屏按钮的事件处理函数
              this.fullScreenButton = this.controlElement.querySelector('.tp-fullscreen');
              if (!this.fullScreenButton)
                  return;
              this.fullScreenButton.addEventListener('click', this.player.toggleFullScreen);
              this.fullScreenButton.innerHTML = Icons.fullWeb;
          };
          // 监听控制栏的尺寸变化, 控制显示隐藏 播放按钮，视频时间和音量控制栏
          this.watchControlResize = () => {
              const resizeObserver = new ResizeObserver(throttle((entries) => {
                  for (const entry of entries) {
                      if (!entry.contentBoxSize)
                          return;
                      const { inlineSize, blockSize } = entry.contentBoxSize[0];
                      // 播放按钮的显示隐藏
                      if (blockSize < 40 || inlineSize < 40) {
                          this.playButton.style.display = 'none';
                      }
                      else {
                          this.playButton.style.display = 'grid';
                      }
                      // 控制栏的显示隐藏
                      if (blockSize < 75 || inlineSize < 60) {
                          this.bottomControlBar.style.display = 'none';
                      }
                      else {
                          this.bottomControlBar.style.display = 'flex';
                      }
                      // 播放按钮的缩放
                      if (blockSize < 100 || inlineSize < 100) {
                          this.playButton.style.scale = '0.5';
                      }
                      else {
                          this.playButton.style.scale = '1';
                      }
                      // 控制全屏按钮的显示隐藏
                      if (this.fullScreenButton && inlineSize < 200) {
                          this.fullScreenButton.style.display = 'none';
                      }
                      else {
                          this.fullScreenButton && (this.fullScreenButton.style.display = 'block');
                      }
                      // 控制播放时间显示隐藏
                      if (this.playTime && inlineSize < 330) {
                          this.playTime.style.display = 'none';
                      }
                      else {
                          this.playTime && (this.playTime.style.display = 'block');
                      }
                      // 控制音量控制栏的显示隐藏
                      if (this.volumeControlBar && inlineSize < 400) {
                          this.volumeControlBar.style.display = 'none';
                      }
                      else {
                          this.volumeControlBar && (this.volumeControlBar.style.display = 'flex');
                      }
                  }
              }, 30));
              resizeObserver.observe(this.controlElement);
          };
          // 初始化控制栏相关事件
          this.initControlsEvent = () => {
              // 由于暂时缺少数据，播放已停止。
              this.player.on('waiting', this.onWaiting);
              // 更新播放时间
              this.player.on('timeupdate', this.onTimeupdate);
              // 由于缺乏数据而暂停或延迟后，播放准备开始。
              this.player.on('playing', this.onPlaying);
              this.player.on('canplay', () => this.toggleLoading(false));
              this.player.on('seeked', () => this.onSeeked);
              this.player.on('loadedmetadata', this.initTimeTip);
              // 播放，暂停后自动隐藏控制栏
              this.player.on('pause', this.setAutoHide);
              this.player.on('play', this.setAutoHide);
              this.initMountTargetEvent();
              // 监听控制栏的尺寸变化
              this.watchControlResize();
          };
          // 初始化时间 tip 逻辑
          this.initTimeTip = () => {
              const tooltip = this.controlElement.querySelector('.tp-play-time-tip');
              const duration = this.player.duration;
              let hasMoved = false;
              let outOfBounds = false;
              this.seekBar.addEventListener('input', (event) => {
                  const target = event.target;
                  tooltip.textContent = formatTime((+target.value / 100) * duration);
                  if (isMobile && hasMoved && !outOfBounds)
                      tooltip.style.display = 'block';
              });
              // 显示 tip
              const showTip = (event) => {
                  const seekBarWidth = this.seekBar.clientWidth;
                  let positionX = 0;
                  if (event instanceof MouseEvent) {
                      tooltip.style.display = 'block';
                      positionX = event.offsetX;
                      const timeStamp = (positionX / seekBarWidth) * duration;
                      tooltip.textContent = formatTime(timeStamp);
                  }
                  if (event instanceof TouchEvent) {
                      const touch = event.touches[0];
                      const target = event.target;
                      let rect = target.getBoundingClientRect();
                      positionX = touch.clientX - rect.left;
                      hasMoved = true;
                  }
                  if (positionX < 0 || positionX > seekBarWidth) {
                      tooltip.style.display = 'none';
                      outOfBounds = true;
                  }
                  outOfBounds = false;
                  tooltip.style.left = positionX - tooltip.clientWidth / 2 + 10 + 'px';
              };
              this.seekBar.addEventListener('touchmove', showTip);
              this.seekBar.addEventListener('mousemove', showTip);
              // 隐藏 tip
              const hideTip = () => {
                  setTimeout(() => {
                      tooltip.style.display = 'none';
                      hasMoved = false;
                  }, 100);
              };
              this.seekBar.addEventListener('mouseleave', hideTip);
              this.seekBar.addEventListener('touchend', hideTip);
          };
          // 初始化控制栏容器相关事件
          this.initMountTargetEvent = () => {
              if (isMobile)
                  this.mountTarget.addEventListener('touchstart', this.setAutoHide);
              this.mountTarget.addEventListener('click', this.setAutoHide);
              this.mountTarget.addEventListener('mousemove', this.setAutoHide);
          };
          // 移除控制栏容器相关事件
          this.removeMountTargetEvent = () => {
              // this.mountTarget?.removeEventListener('mousemove', this.setAutoHide)
              // this.mountTarget?.removeEventListener('mouseleave', this.hide)
          };
          // 设置控制栏的自动隐藏
          this.setAutoHide = () => {
              this.show();
              clearTimeout(this.autoHideTimer);
              // @ts-ignore
              this.autoHideTimer = setTimeout(() => {
                  !this.player.paused && this.hide();
              }, 2 * 1000);
          };
          // 显示控制栏
          this.show = () => {
              this.mountTarget.classList.remove('tp-hide-controller');
          };
          // 隐藏控制栏
          this.hide = () => {
              this.mountTarget.classList.add('tp-hide-controller');
          };
          // 切换控制条显示隐藏
          this.toggle = () => {
              if (!this.mountTarget.classList.contains('tp-hide-controller')) {
                  this.hide();
              }
              else {
                  this.show();
              }
          };
          // 更新播放进度条
          this.updateSeekBar = (once) => {
              this.seekBar.value = (((this.player.video.currentTime - this.player.clipStart) / this.player.duration) * 100).toString();
              if (once)
                  return;
              this.playRaf = window.requestAnimationFrame(() => this.updateSeekBar());
          };
          // 拖动进度条
          this.onSeeking = (event) => {
              event.preventDefault();
              event.stopPropagation();
              const target = event.target;
              const seekTime = Number((parseFloat(target.value) / 100) * this.player.duration) + Number(this.player.clipStart);
              this.player.seek(seekTime);
          };
          // 快进结束
          this.onSeeked = () => {
              // 取消动画
              this.playRaf && cancelAnimationFrame(this.playRaf);
              this.updateSeekBar(true);
          };
          // 更新播放时间
          this.onTimeupdate = () => {
              if (!this.playTime && !this.controlOptions.manualMount)
                  return;
              const progress = +this.seekBar.value;
              const currentTime = progress * this.player.duration * 0.01;
              this.playTime && (this.playTime.textContent = `${secondToTime(currentTime < 0 ? 0 : currentTime)} / ${secondToTime(this.player.duration)}`);
              const videoCurrentTime = this.player.video.currentTime;
              // 当前播放时间大于结束时间时，暂停播放 / 循环播放
              if (!this.player.handleVideoEndByOuter && this.player.clipEnd && videoCurrentTime >= this.player.clipEnd - 0.1) {
                  this.player.pause();
                  this.player.seek(Number(this.player.clipStart));
                  this.updateSeekBar(true);
                  if (this.player.options.loop)
                      this.player.play();
              }
          };
          // 调整视频音量
          this.onVolumeChange = (event) => {
              const target = event.target;
              // 调整视频音量
              this.player.volume(Number(target.value));
          };
          // waiting 事件处理函数
          this.onWaiting = () => {
              if (!this.player.paused)
                  this.player.paused = true;
              this.toggleLoading(true);
          };
          // playing 事件处理函数
          this.onPlaying = () => {
              if (this.player.paused)
                  this.player.paused = false;
              this.toggleLoading(false);
          };
          // 切换音量图标
          this.switchVolumeIcon = () => {
              if (!this.controlOptions.volumeControl)
                  return;
              if (this.player.video.muted || this.player.video.volume === 0) {
                  this.muteButton.innerHTML = Icons.volumeOff;
              }
              else if (this.player.video.volume > 0 && this.player.video.volume < 1) {
                  this.muteButton.innerHTML = Icons.volumeDown;
              }
              else {
                  this.muteButton.innerHTML = Icons.volumeUp;
              }
          };
          // 销毁事件
          this.destroy = () => {
              clearTimeout(this.autoHideTimer);
          };
          this.player = player;
          this.controlOptions = player.options.controlOptions || {};
          this.mountTarget = this.controlOptions.mountTarget || this.player.videoContainer;
          this.initControls();
          this.initControlsEvent();
      }
      // 设置控制条是否显示
      setVisible(val) {
          val ? this.show() : this.hide();
      }
      // 控制 loading 动画的显示与隐藏
      toggleLoading(show) {
          if (show) {
              this.loading.style.opacity = '1';
              this.playButton.style.opacity = '0';
          }
          else {
              this.loading.style.opacity = '0';
              this.playButton.style.opacity = '1';
          }
      }
  }
  
  /**
   * @description Video 事件
   * 以 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video#%E4%BA%8B%E4%BB%B6 为准。
   */
  var VideoEventsEnum;
  (function (VideoEventsEnum) {
      /**
       * @description 当音频处理程序处理缓冲区时触发。(The input buffer of a ScriptProcessorNode is ready to be processed.)
       */
      VideoEventsEnum["audioprocess"] = "audioprocess";
      /**
       * @description 浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不必停下来进一步缓冲内容。
       */
      VideoEventsEnum["canplay"] = "canplay";
      /**
       * @description 浏览器估计它可以在不停止内容缓冲的情况下播放媒体直到结束。
       */
      VideoEventsEnum["canplaythrough"] = "canplaythrough";
      /**
       * @description OfflineAudioContext 渲染完成。
       */
      VideoEventsEnum["complete"] = "complete";
      /**
       * @description  duration 属性的值改变时触发。
       */
      VideoEventsEnum["durationchange"] = "durationchange";
      /**
       * @description 媒体内容变为空；例如，当这个 media 已经加载完成（或者部分加载完成），则发送此事件，并调用 load() 方法重新加载它。
       */
      VideoEventsEnum["emptied"] = "emptied";
      /**
       * @description 视频停止播放，因为 media 已经到达结束点。
       */
      VideoEventsEnum["ended"] = "ended";
      /**
       * @description media 中的首帧已经完成加载。
       */
      VideoEventsEnum["loadeddata"] = "loadeddata";
      /**
       * @description 已加载元数据。
       */
      VideoEventsEnum["loadedmetadata"] = "loadedmetadata";
      /**
       * @description 播放已暂停。
       */
      VideoEventsEnum["pause"] = "pause";
      /**
       * @description 播放已开始。
       */
      VideoEventsEnum["play"] = "play";
      /**
       * @description //由于缺乏数据而暂停或延迟后，播放准备开始。
       */
      VideoEventsEnum["playing"] = "playing";
      /**
       * @description 在浏览器加载资源时周期性触发。
       */
      VideoEventsEnum["progress"] = "progress";
      /**
       * @description 播放速率发生变化。
       */
      VideoEventsEnum["ratechange"] = "ratechange";
      /**
       * @description 跳帧（seek）操作完成。
       */
      VideoEventsEnum["seeked"] = "seeked";
      /**
       * @description 跳帧（seek）操作开始。
       */
      VideoEventsEnum["seeking"] = "seeking";
      /**
       * @description 用户代理（user agent）正在尝试获取媒体数据，但数据意外未出现。
       */
      VideoEventsEnum["stalled"] = "stalled";
      /**
       * @description 媒体数据加载已暂停。
       */
      VideoEventsEnum["suspend"] = "suspend";
      /**
       * @description currentTime 属性指定的时间发生变化。
       */
      VideoEventsEnum["timeupdate"] = "timeupdate";
      /**
       * @description 音量发生变化。
       */
      VideoEventsEnum["volumechange"] = "volumechange";
      /**
       * @description 由于暂时缺少数据，播放已停止。
       */
      VideoEventsEnum["waiting"] = "waiting";
      /**
       *
       *
       *
       *
       * @description 在发生错误时触发。
       */
      VideoEventsEnum["error"] = "error";
      /**
       * @description 在视频/音频（audio/video）终止加载时触发。
       */
      VideoEventsEnum["abort"] = "abort";
      /**
       * @description 在浏览器开始加载媒体数据时触发。
       */
      VideoEventsEnum["loadstart"] = "loadstart";
      /**
       * @description 当音频数据可用时触发。
       */
      VideoEventsEnum["mozaudioavailable"] = "mozaudioavailable";
  })(VideoEventsEnum || (VideoEventsEnum = {}));
  /**
   * @description 播放器事件
   */
  var PlayerEventsEnum;
  (function (PlayerEventsEnum) {
      /**
       * @description 播放器销毁时。
       */
      PlayerEventsEnum["destroy"] = "destroy";
      /**
       * @description 播放器 resize 时。
       */
      PlayerEventsEnum["resize"] = "resize";
      /**
       * @description 播放器截屏时。
       */
      PlayerEventsEnum["screenshot"] = "screenshot";
      // fullscreen = 'fullscreen',
      // fullscreen_cancel = 'fullscreen_cancel',
      // webfullscreen = 'webfullscreen',
      // webfullscreen_cancel = 'webfullscreen_cancel',
  })(PlayerEventsEnum || (PlayerEventsEnum = {}));
  
  class TinyPlayEvents {
      constructor(player) {
          this.events = {};
          this.player = player;
          // 视频相关事件
          this.videoEvents = Object.keys(VideoEventsEnum).map((key) => VideoEventsEnum[key]);
          // 播放器相关事件
          this.playerEvents = Object.keys(PlayerEventsEnum).map((key) => PlayerEventsEnum[key]);
          // TODO 测试用
          // this.videoEvents.forEach((eventName) => this.on(eventName, () => console.log(eventName)))
          // this.on('timeupdate', (e) => console.log('timeupdate',e.target.currentTime))
      }
      // 判断事件类型
      type(name) {
          if (this.playerEvents.indexOf(name) !== -1)
              return 'player';
          if (this.videoEvents.indexOf(name) !== -1)
              return 'video';
          console.error(`${name} 事件不存在，请查看下文档`);
          return null;
      }
      // 绑定事件
      on(name, callback) {
          const type = this.type(name);
          if (type && typeof callback !== 'function')
              return console.error(`${name} 事件的回调函数必须是一个函数`);
          if (!this.events[name])
              this.events[name] = [];
          this.events[name].push(callback);
          // video 事件，直接绑定到 video 元素上
          if (type === 'video') {
              this.player.video.addEventListener(name, callback);
          }
          // 播放器的事件
          if (type === 'player') {
              this.events[name].push(callback);
          }
      }
      // 移除事件
      off(name, callback) {
          if (this.type(name) && this.events[name] && this.events[name].length) {
              const index = this.events[name].indexOf(callback);
              if (index === -1)
                  return;
              this.events[name].splice(index, 1);
              // 移除事件监听器
              if (this.type(name) === 'video') {
                  this.player.video.removeEventListener(name, callback);
              }
          }
      }
      // 触发事件
      emit(name, data) {
          if (!this.events[name] || !this.events[name].length)
              return;
          this.events[name].forEach((callback) => {
              callback(data);
          });
      }
      // 触发一次后自动注销
      once(name, callback) {
          const fn = (...arg) => {
              callback(...arg);
              this.off(name, fn);
          };
          this.on(name, fn);
      }
  }
  
  class TinyPlayer {
      constructor(options) {
          this.paused = true; // 是否暂停
          this.videoType = 'auto'; // 视频类型
          this.duration = 0; // 视频时长
          this.handleVideoEndByOuter = false; // 是否由外部控制视频结束
          this.onLoadedMetadata = () => {
              // 更新视频时长
              this.duration = this.clipEnd - this.clipStart || this.video.duration;
              this.controller.onTimeupdate();
          };
          // 当视频开始播放时，
          this.onPlay = () => {
              // 更新播放器状态
              this.paused = false;
              const playButton = this.controller.playButton;
              playButton && (playButton.innerHTML = Icons.pause);
              this.controller.updateSeekBar();
          };
          // 当视频暂停播放时
          this.onPause = () => {
              // 更新播放器状态
              this.paused = true;
              const playButton = this.controller.playButton;
              playButton && (playButton.innerHTML = Icons.play);
              // 取消动画
              cancelAnimationFrame(this.controller.playRaf);
          };
          // 使用 hls 播放视频
          // useHls = (video: any) => {
          //   this.hls = new Hls()
          //   this.hls.loadSource(video.src)
          //   this.hls.attachMedia(video)
          //   // TODO 走外部依赖的形式
          //   // if (!window.Hls) return console.error("Error: Can't find Hls.")
          //   // if (window.Hls.isSupported()) return console.error('Hls is not supported')
          //   // const hls = new window.Hls()
          //   // hls.loadSource(video.src)
          //   // hls.attachMedia(video)
          // }
          // 销毁 hls 实例
          // destroyHls = () => {
          //   this.hls && this.hls.destroy()
          // }
          // 播放视频
          this.play = () => __awaiter(this, void 0, void 0, function* () {
              yield this.video.play();
          });
          // 暂停视频
          this.pause = () => __awaiter(this, void 0, void 0, function* () {
              yield this.video.pause();
          });
          // 切换播放状态
          this.togglePlay = (event) => __awaiter(this, void 0, void 0, function* () {
              if (this.video.paused) {
                  yield this.play();
              }
              else {
                  yield this.pause();
              }
              // event.preventDefault()
              // event.stopPropagation()
          });
          // 跳转到视频指定位置，调整视频播放进度
          this.seek = (time) => {
              this.video.currentTime = Number(time);
          };
          // 静音或取消静音
          this.mute = () => {
              // 静音或取消静音
              this.video.muted = !this.video.muted;
              this.controller.volumeSlider.value = this.video.muted ? '0' : this.video.volume + '';
              this.controller.muteButton.innerHTML = this.video.muted ? Icons.volumeOff : Icons.volumeUp;
          };
          // 进入或退出全屏模式
          this.toggleFullScreen = () => {
              if (document.fullscreenElement) {
                  document.exitFullscreen();
              }
              else {
                  this.videoContainer.requestFullscreen();
              }
          };
          // 控制水印的显示与隐藏
          this.handleWaterMarkShow = (show) => {
              if (this.waterMark)
                  this.waterMark.style.display = show ? 'block' : 'none';
          };
          // 挂载控制器到目标节点
          this.mountController = (mountTarget) => {
              if (this.options.controlOptions.nativeControls)
                  return;
              this.controller.removeMountTargetEvent();
              this.controller.mountTarget = mountTarget;
              this.controller.initMountTargetEvent();
              mountTarget.appendChild(this.controller.controlElement);
          };
          // 选取视频片段
          this.cutVideo = (start, end) => {
              this.clipStart = start;
              this.clipEnd = end;
              this.duration = end - start;
              this.seek(start);
              this.controller.initTimeTip();
              this.controller.updateSeekBar(true);
          };
          // 销毁播放器
          this.destroy = () => {
              this.pause();
              this.video.src = '';
              this.container.innerHTML = '';
              this.controller.destroy();
              // this.timer.destroy()
              // this.events.trigger('destroy')
          };
          this.container = options.container;
          this.options = options;
          this.clipStart = options.clipStart || 0;
          this.clipEnd = options.clipEnd || 0;
          this.handleVideoEndByOuter = options.handleVideoEndByOuter || false;
          this.setup();
      }
      setup() {
          // 初始化视频播放器
          // this.videoContainer = document.createDocumentFragment().appendChild(document.createElement('div'))
          this.videoContainer = document.createElement('div');
          this.videoContainer.className = 'tp-container';
          this.videoContainer.style.width = this.options.width || '100%';
          this.videoContainer.style.height = this.options.height || '100%';
          // 播放器模板
          this.videoContainer.innerHTML = anonymous$1(this.options);
          // 将 player 添加到指定容器中
          this.container.innerHTML = '';
          this.container.appendChild(this.videoContainer);
          // 视频节点
          this.video = this.videoContainer.querySelector('video');
          // 水印节点
          this.waterMark = this.videoContainer.querySelector('.tp-watermark');
          // 设置水印图案
          this.waterMark.style.backgroundImage = `url(${this.options.waterMarkUrl})`;
          // 播放器事件系统
          this.events = new TinyPlayEvents(this);
          // 初始化视频
          this.initVideo();
          // 播放器控制器
          this.controller = new Controller(this);
          this.handleWaterMarkShow(this.options.waterMarkShow);
          this.seek(this.clipStart);
      }
      // 初始化播放器,设置视频相关回调函数
      initVideo() {
          // 初始化 MSE 支持
          this.initMSE(this.video, this.options.type);
          // 播放回调
          this.on('play', this.onPlay);
          // 暂停播放
          this.on('pause', this.onPause);
          // 播放结束
          this.on('ended', () => {
              if (this.clipEnd)
                  return;
              if (!this.options.loop) {
                  !this.paused && this.seek(this.clipStart);
                  this.pause();
              }
              else {
                  !this.paused && this.seek(this.clipStart);
                  this.play();
              }
              this.controller.updateSeekBar(true);
          });
          // 视频元数据加载完成
          this.on('loadedmetadata', this.onLoadedMetadata);
      }
      // 注册事件
      on(name, callback) {
          this.events.on(name, callback);
      }
      // 注册一次性事件
      once(name, callback) {
          this.events.once(name, callback);
      }
      // 手动触发事件
      emit(name, data) {
          this.events.emit(name, data);
      }
      // 移除事件
      off(name, callback) {
          this.events.off(name, callback);
      }
      // MSE 支持
      initMSE(video, type) {
          this.videoType = type;
          if (type === 'hls') {
              this.videoType = 'hls';
              // 如果浏览器支持播放 HLS 视频流。
              if (video.canPlayType('application/x-mpegURL') || video.canPlayType('application/vnd.apple.mpegURL'))
                  this.videoType = 'normal';
              // 错误传参时，纠正播放类型
              if (/.mp4(#|\?|$)/i.exec(video.src))
                  this.videoType = 'normal';
          }
          if (type === 'auto') {
              if (/m3u8(#|\?|$)/i.exec(video.src))
                  this.videoType = 'hls';
              if (/.flv(#|\?|$)/i.exec(video.src))
                  this.videoType = 'flv';
              if (/.mpd(#|\?|$)/i.exec(video.src))
                  this.videoType = 'dash';
              this.videoType = 'normal';
          }
          switch (this.videoType) {
              case 'flv':
                  console.error('暂不支持 flv 格式视频');
                  break;
              case 'dash':
                  console.error('暂不支持 dash 格式视频');
                  break;
          }
          console.log(`🚀🚀🚀 MSE: 预设播放模式：${type},实际播放模式：${this.videoType}, 视频链接：${video.src}`);
      }
      // 设置音量
      volume(val) {
          let percentage = parseFloat((val || 0));
          if (!isNaN(percentage)) {
              percentage = Math.max(percentage, 0);
              percentage = Math.min(percentage, 1);
              this.video.volume = percentage;
              if (this.video.muted) {
                  this.video.muted = false;
              }
              this.controller.switchVolumeIcon();
          }
          return this.video.volume;
      }
  }
  
  export { TinyPlayer as default };
  //# sourceMappingURL=index.js.map
  