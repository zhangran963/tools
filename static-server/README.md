## 使用方法
在 `.babelrc` 或 `.zshrc`等文件中配置命令
```bash
# tool: static-server
alias static-server="node ~/tools/static-server/index.js"
```
* 命令1: `static-server`
  * 以当前文件夹为项目目录, 
  * 默认值为端口号: 5555
* 命令2: `static-server 4200`
  * 以当前文件夹为项目目录, 
  * 4200为端口号
* 命令3: `static-server 4200 /Users/ran/test-project/vue/vuedemo1/dist`
  * 以`/Users/ran/test-project/vue/vuedemo1/dist`为项目目录, 
  * 4200为端口号
* 命令4: `static-server history /Users/ran/test-project/vue/vuedemo1/dist`
  * vue-router的history模式(默认hash模式)
  * 以`/Users/ran/test-project/vue/vuedemo1/dist`为项目目录, 
  