

// "https://cdn.jsdelivr.net/gh/imm-o/holiday-cn@latest/$var.json",

export default { 
    analysis: 'https://46yun.free1.asia/',
    weibo: 'https://weibo.com/ajax/statuses/hot_band',
    
    holiday: "https://cdn.jsdelivr.net/gh/for2me/holiday-cn@master/$var.json",
    // holiday: 'https://raw.githubusercontent.com/imm-o/holiday-cn/master/$var.json',
    
    // themes: 'https://github.moeyy.xyz/https://raw.githubusercontent.com/for2me/dataset/themes/$type/$var.json',
    themes: 'https://raw.githubusercontent.com/forzys/dataset/main/dataset/themes/$type/$var.json',
    bmi: 'https://raw.githubusercontent.com/forzys/dataset/main/dataset/bmi/bmi.json',
    
    bingbz: 'https://raw.githubusercontent.com/forzys/dataset/main/dataset/bing/$var.json',
      
    archive: 'https://raw.githubusercontent.com/forzys/blog/main/archive/$blog.md',
    // archive: 'https://cdn.jsdelivr.net/gh/forzys/blog@main/archive/$blog.md',

    blogs: 'https://raw.githubusercontent.com/forzys/blog/main/archive/$blog.json', 
    // blogs: 'https://cdn.jsdelivr.net/gh/forzys/blog@main/archive/$blog.json',
}
// async function translation(array) {
//     var splicing = []
//     if (!(array instanceof Array)) {
//         array = [array]
//     }
//     for (let i = 0; i < array.length; i++) {
//         splicing.push(
//             {
//                 "originalText": array[i],
//                 "translatedText": null,
//                 "detectedLanguage": null,
//                 "status": "translating",
//                 "waitTranlate": {}
//             }
//         )
//     }
//     return await makeRequest("auto", "zh-CN", splicing)//无并发限制接口
//     async function makeRequest(sourceLanguage, targetLanguage, requests) {
//         return await new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             xhr.open(
//                 "POST",
//                 "https://translate.googleapis.com/translate_a/t?anno=3&client=te&v=1.0&format=html" + GetExtraParameters(sourceLanguage, targetLanguage, requests)
//             );
//             xhr.setRequestHeader(
//                 "Content-Type",
//                 "application/x-www-form-urlencoded"
//             );
//             xhr.responseType = "json";

//             xhr.onload = (event) => {
//                 resolve(xhr.response);
//             };

//             xhr.onerror = xhr.onabort = xhr.ontimeout = (event) => { console.error(event); reject(); };

//             xhr.send(getRequestBody(sourceLanguage, targetLanguage, requests));
//         });
//         function getRequestBody(sourceLanguage, targetLanguage, requests) {
//             return requests
//                 .map((info) => `&q=${encodeURIComponent(info.originalText)}`)
//                 .join("");
//         }
//         function GetExtraParameters(sourceLanguage, targetLanguage, requests) {
//             return `&sl=${sourceLanguage}&tl=${targetLanguage}&tk=${calcHash(requests.map((info) => info.originalText).join(""))}`
//             function calcHash(query) {
//                 const windowTkk = "448487.932609646";
//                 const tkkSplited = windowTkk.split(".");
//                 const tkkIndex = Number(tkkSplited[0]) || 0;
//                 const tkkKey = Number(tkkSplited[1]) || 0;

//                 const bytesArray = transformQuery(query);

//                 let encondingRound = tkkIndex;
//                 for (const item of bytesArray) {
//                     encondingRound += item;
//                     encondingRound = shiftLeftOrRightThenSumOrXor(
//                         encondingRound,
//                         "+-a^+6"
//                     );
//                 }
//                 encondingRound = shiftLeftOrRightThenSumOrXor(
//                     encondingRound,
//                     "+-3^+b+-f"
//                 );

//                 encondingRound ^= tkkKey;
//                 if (encondingRound <= 0) {
//                     encondingRound = (encondingRound & 2147483647) + 2147483648;
//                 }

//                 const normalizedResult = encondingRound % 1000000;
//                 return normalizedResult.toString() + "." + (normalizedResult ^ tkkIndex);
//                 function transformQuery(query) {
//                     /** @type {Array<number>} */
//                     const bytesArray = [];
//                     let idx = 0;
//                     for (let i = 0; i < query.length; i++) {
//                         let charCode = query.charCodeAt(i);

//                         if (128 > charCode) {
//                             bytesArray[idx++] = charCode;
//                         } else {
//                             if (2048 > charCode) {
//                                 bytesArray[idx++] = (charCode >> 6) | 192;
//                             } else {
//                                 if (
//                                     55296 == (charCode & 64512) &&
//                                     i + 1 < query.length &&
//                                     56320 == (query.charCodeAt(i + 1) & 64512)
//                                 ) {
//                                     charCode =
//                                         65536 +
//                                         ((charCode & 1023) << 10) +
//                                         (query.charCodeAt(++i) & 1023);
//                                     bytesArray[idx++] = (charCode >> 18) | 240;
//                                     bytesArray[idx++] = ((charCode >> 12) & 63) | 128;
//                                 } else {
//                                     bytesArray[idx++] = (charCode >> 12) | 224;
//                                 }
//                                 bytesArray[idx++] = ((charCode >> 6) & 63) | 128;
//                             }
//                             bytesArray[idx++] = (charCode & 63) | 128;
//                         }
//                     }
//                     return bytesArray;
//                 }
//                 function shiftLeftOrRightThenSumOrXor(num, optString) {
//                     for (let i = 0; i < optString.length - 2; i += 3) {
//                         /** @type {string|number} */
//                         let acc = optString.charAt(i + 2);
//                         if ("a" <= acc) {
//                             acc = acc.charCodeAt(0) - 87;
//                         } else {
//                             acc = Number(acc);
//                         }
//                         if (optString.charAt(i + 1) == "+") {
//                             acc = num >>> acc;
//                         } else {
//                             acc = num << acc;
//                         }
//                         if (optString.charAt(i) == "+") {
//                             num += acc & 4294967295;
//                         } else {
//                             num ^= acc;
//                         }
//                     }
//                     return num;
//                 }
//             }
//         }
//     }
// }

// console.log(await translation(['hi', 'omg', 'yes']));