const Schedule = require('node-schedule');
const fs = require('fs');

const { exec } = require('child_process');
const { promisify } = require('util')

/**
 * 延时函数
 * @param {number} time 延时时间(ms)
 */
const sleep = (time=0) => new Promise((resolve, reject) => setTimeout(resolve, time));



const execPromise = promisify(exec);
/**
 * 执行命令(异步)
 * @param {string} script 命令
 */
const execPro = (script) => {
  return execPromise(script).then(({stdout, stderr}) => {
    // console.log(stdout, stderr);
    
    if(stderr){
      return sleep(100).then(_ => Promise.reject(stderr))
    }else{
      return sleep(100).then(_ => stdout)
    }
  }).catch(err => {
    console.log('error: ', err);
  })
}


/**
 * 获取进程
 * @param {string} name 进程名
 * @param {string} param.condition  此进程包含的识别标识
 * @returns {string[]} 命令组成的数组
 */
function getTenor(name='', {
  condition = '',
}){
  if(!name){
    return Promise.reject({errMsg: '未填写 进程名'})
  }

  return execPro(`ps aux|grep ${name}`).then(stdout => {
    let tenorArr = stdout.split('\n');
    // console.log('打印stdout:', stdout);

    if(condition){
      tenorArr = tenorArr.filter(item => item.includes(condition))
      if(Array.isArray(tenorArr) && tenorArr.length){
        return tenorArr;
      }else{
        return Promise.reject({errMsg: '没有找到命令'})
      }
    }else{
      return tenorArr;
    }
  })
}

/**
 * 获取 pid
 * @param {string} name 进程名
 * @param {string} param.condition  此进程包含的识别标识
 */
function getPid(name='', {
  condition=''
}){
  if(!name){
    return Promise.reject({errMsg: '未填写 进程名'})
  }
  if(!condition){
    return Promise.reject({errMsg: '未填写 限制条件'})
  }

  return getTenor(name, {condition}).then(([tenor]) => {
    // 分割单条字符串, 取第二项
    let tenorChips = tenor.split(/\s+/);
    if(Array.isArray(tenorChips) && tenorChips.length>1){
      return tenorChips[1];
    }else{
      return Promise.reject({errMsg: '没有找到pid'});
    }
  })
}


module.exports = {
  sleep,
  Schedule,
  fs,
  execPro,
  getTenor,
  getPid,
}


// 节流函数, 触发一次后, 一段时间之后, 执行第二次
function throttle(fn){
  let allow = true;
  return function(){
    if(allow){
      allow = false;
      fn()
      setTimeout(()=>{
        allow = true;
      }, 100)
    }
  }
}
