// 截取有效字段
let argv = process.argv.slice(2)
// 去除每个参数中的无效内容
argv = argv.map(arg => {
  let args = arg.split(/\=+/g)
  return args[args.length-1]
})

/**
 * 区分: 
 * 1. __dirname: 执行的文件所在路径
 * 2. PWD: 输出命令时, 所在的路径
 */
let pathname = process.env.PWD  // 默认路径: 本地址
let port = 5555  // 默认端口: 5555
argv.forEach(arg => {
  if(Number.isInteger(Number(arg))){
    // 数字类型的的是端口
    port = +arg
  }else if(typeof arg === 'string'){
    // 其他类型是路径
    pathname = arg
  }
})


module.exports = {
  pathname,
  port
}