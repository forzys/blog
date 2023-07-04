







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
 

export const EventBus = (function(){
    let topics = {}, offEvents ={}, uuid = 0;
 
    function subscribe (topic, callback, once) {
        /**
         * topic  被订阅的内容的key值
         * callback 订阅者传入的订阅事件
         * once 是否只订阅一次
         */

        uuid ++
        topics[topic] = topics[topic]
            ? [...topics[topic], { callback, uuid, once }]
            : [{ callback, uuid, once }]
 
        if(offEvents[topic]){
            publish(topic, ...offEvents[topic])
        }

        return uuid
    }

    function publish (topic, value) {
        /**
         * topic 被发布的内容的key值
         * value 发布者传入的订阅事件
         */
        if (topics[topic]) { 
            for (let i = 0; i < topics[topic].length; i++) {
                let item = topics[topic][i]
                item.callback(value); 
                // 只订阅一次 则执行之后销毁
                if (item.once) {
                    topics[topic].splice(i, 1)
                }
            } 
        }else{
            // 先发布再订阅事件 则先存储发布事件
            offEvents[topic] = [value]
        }
    }
 
    function unsubscribe(topic, callback){
        /**
         * topic 被取消订阅的内容的key值
         * callback 取消订阅者传入的订阅事件 | 订阅时返回的uuid | 默认取消所有订阅
         */
        if (topics[topic]) {
            let name = ''
            if(callback instanceof Function){
                name = 'callback'
            }
            if(typeof callback === 'number'){
                name = 'uuid'
            }

            if(typeof callback === 'undefined'){
                name = 'undefined'
            }

            for (let i = 0; i < topics[topic].length; i++) {
                let fn = topics[topic][i][name] 
                if (fn === callback) {
                    fn ? topics[topic].splice(i, 1) : topics[topic].pop()
                }
            }   
        }
    }

    // 订阅一次 执行之后销毁
    function subscribeOnce(topic, callback){
        return subscribe(topic, callback, true)
    } 

    return {
        subscribe,
        publish,
        unsubscribe,
        subscribeOnce
    }
     
})()
 



 



