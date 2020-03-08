const http = require('http')
const path = require('path')
const { promisify } = require('util')
const fs = require('fs')
let PReadFile = promisify(fs.readFile)

// 解析的 路径和端口
const { pathname, port, mode } = require('./resolvePath')
/* nginx 中的try_files指令 */
const try_files = require('./try_files')
/* 处理Content-Type属性 */
const ContentType = require('./content-type')


http.createServer(async (req,res) => {
  let url = req.url
  if(url.includes('favicon.ico')){
    return res.end()
  }

  /* 适配 vue-router的  history|hash 模式 */
  if(mode === 'history'){
    /* 模仿nginx的try_files指令: try_files $uri $uri/ /index.html */
    url = try_files(path.join(pathname, url), path.join(pathname, url, '/'), path.join(pathname, '/index.html'))
  }else if(mode === 'hash'){
    if(['/'].includes(url)){
      url = '/index.html'
    }
    url = path.join(pathname, url)
  }

  try {
    let options = {}

    if(/\.(html|css|js|txt)$/.test(url)){
      options.encoding = 'utf-8'
    }
    let page = await PReadFile(url, options)

    /* 设置Content-Type */
    let contentType = ContentType(url)
    res.setHeader('Content-Type', contentType)
    // console.log('* ', contentType, url)

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

