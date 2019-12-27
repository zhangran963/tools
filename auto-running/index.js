
const { fs, execPro, getPid, getTenor } = require('./src/module')
const Config = require('./src/config')

// 获取类型, 用法示例 node index.js type=leetcode
let configStr = process.argv[2];
let configs = /\=(\w+)$/g.exec(configStr);
let configName = configs ? (configs[1] || configs[0]) : configStr || 'typescript';

// 获取配置信息
let config = null;
if(Config.hasOwnProperty(configName)){
  config = Config[configName];
}else{
  return console.error('错误config:', '配置项错误');
}


let allow = true;
fs.watch(config.path, {
  recursive: true,  // 监视所有子目录
}, (event, pathname) => {
  // 过滤规则
  let excludes = config.excludes;
  if(Array.isArray(excludes)){
    if(!excludes.every(reg => pathname.match(reg) === null)){
      return
    }
  }

  // tip: 解决watch API的bug, 总是触发2次;
  if (!allow) { return }
  allow = false;
  setTimeout(() => { allow = true }, 300);


  // getPid('node', {
  //   condition: config.condition
  // }).then(pid => {
  //   console.log('打印tenor:', pid);
  //   if(pid){
  //     // 清除进程
  //     return execPro(`kill ${pid}`)
  //   }else{
  //     return Promise.reject({errMsg: '没有返回 pid'})
  //   }
  // })
  // .catch(err => console.log(err))
  // .then(_ => {
  //   // 再次执行 命令
  //   console.log('执行内容');
  //   config.script = pathname;
  //   return execPro(config.script)
  // })
  // .then((stdout) => {
  //   console.log(`** ${pathname} at ${(new Date()).toLocaleTimeString()} **`);
  //   console.log(stdout);
  // }).catch(err => {
  //   console.log('error: ', err);
  // })


  
  config.script = pathname;

  execPro(config.script)
  .then((stdout) => {
    console.log(`** ${pathname} at ${(new Date()).toLocaleTimeString()} **`);
    console.log(stdout);
  }).catch(err => {
    console.log('error: ', err);
  })

})






