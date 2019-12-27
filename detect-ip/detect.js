const request = require('request');
const fetch = require('node-fetch');

let url = 'https://www.toolsdaquan.com/toolapi/public/ipchecking/34.92.28.133/43370'



request.get(url, {
  headers: {
    "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "_ga=GA1.2.59798320.1568856341; Hm_lvt_6c497f74830b2047430c4a193e515dde=1568856342,1569286169; Hm_lpvt_6c497f74830b2047430c4a193e515dde=1569286169; _gid=GA1.2.1703328578.1569286169; _gat_gtag_UA_112052918_20=1",
      "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
      "referrer": "https://www.toolsdaquan.com/ipcheck/",
      "referrerPolicy": "no-referrer-when-downgrade",
  }
}, (err, res, c)=>{
  if(!err){
    console.log('打印body:', res.body);
  }
})




// fetch("https://www.toolsdaquan.com/toolapi/public/ipchecking/34.92.28.133/43370",
//   {
//     // "credentials": "include",
//     "headers": {
//       // ":authority": "www.toolsdaquan.com",
//       // ":method": "GET",
//       // ":path": "/toolapi/public/ipchecking/34.92.28.133/43370",
//       // ":scheme": "https",
//       "accept": "application/json, text/javascript, */*; q=0.01",
//       "accept-encoding": "gzip, deflate, br",
//       "accept-language": "zh-CN,zh;q=0.9",
//       "cache-control": "no-cache",
//       "pragma": "no-cache",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       "x-requested-with": "XMLHttpRequest",
//       "cookie": "_ga=GA1.2.59798320.1568856341; Hm_lvt_6c497f74830b2047430c4a193e515dde=1568856342,1569286169; Hm_lpvt_6c497f74830b2047430c4a193e515dde=1569286169; _gid=GA1.2.1703328578.1569286169; _gat_gtag_UA_112052918_20=1",
//       "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
//       "referrer": "https://www.toolsdaquan.com/ipcheck/",
//       "referrerPolicy": "no-referrer-when-downgrade",
//     },
//     "body": null,
//     "method": "GET",
//     // "mode": "cors"
//   }).then(res => res.text())
//   .then(res => {

//     console.log('打印res:', res);


//   })




// fetch("https://www.toolsdaquan.com/toolapi/public/ipchecking/34.92.28.133/43370", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, */*; q=0.01", "accept-language": "zh-CN,zh;q=0.9", "cache-control": "no-cache", "pragma": "no-cache", "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.toolsdaquan.com/ipcheck/", "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" })