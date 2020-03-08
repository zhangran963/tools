const path = require('path')

/* 截取有效字段 */
let argv = process.argv.slice(2)
// 
/* 去除每个参数中的无效内容, 如 path=/user/local 取 /user/local */
argv = argv.map(arg => {
  let args = arg.split(/\=+/g)
  return args[args.length-1]
})

/**
 * 区分: 
 * 1. __dirname: 执行的文件所在路径
 * 2. PWD: 输出命令时, 所在的路径
 */
let pathname = process.env.PWD  /* 默认路径: 本地址, 执行命令的地址 */
let port = 5555  /* 默认端口: 5555 */
let mode = 'hash'  /* 默认hash模式; */
argv.forEach(arg => {
  if(Number.isInteger(Number(arg))){
    /* 数字类型的的是端口 */
    port = +arg
  }else if(typeof arg === 'string' && arg.includes('history')){
    mode = 'history'
  }else if(typeof arg === 'string'){
    /* 其他类型是路径 */
    pathname = path.resolve(pathname, arg)
  }
})


module.exports = {
  pathname,
  port,
  mode
}