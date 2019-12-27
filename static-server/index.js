const http = require('http')
const path = require('path')
const { promisify } = require('util')
const fs = require('fs')
let PReadFile = promisify(fs.readFile)

// 解析的 路径和端口
const { pathname, port } = require('./resolvePath')

http.createServer(async (req,res) => {
  let url = req.url
  if(url.includes('favicon.ico')){
    return res.end()
  }else if(['/', '/index'].includes(url)){
    url = '/index.html'
  }
  
  // res.setHeader('Content-Type', 'application/json; charset=utf-8')
  url = path.join(pathname, url)
  try {
    let page = await PReadFile(url, {
      encoding: 'utf-8'
    })
    res.write(page)
    res.end()
  } catch (error) {
    res.statusCode = 404
    res.end()
  }
}).listen(port, ()=>{
  console.log('*** 静态页路径:', pathname);
  console.log('*** 访问地址:', `http://localhost:${port}/`);
})

