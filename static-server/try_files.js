// try_files指令: 按顺序检查文件是否存在，返回第一个找到的文件或文件夹(结尾加斜线表示为文件夹)，如果所有的文件或文件夹都找不到，会进行一个内部重定向到最后一个参数
const fs = require('fs')


module.exports = function try_files(...paths){
  return paths.find(path => fs.existsSync(path))
}