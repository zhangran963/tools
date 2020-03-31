const Path = require('path')


// 执行命令配置项 typescript 学习
module.exports = {
  typescript: {
    excludes: [/.*\.ts/],
    path: '/Users/ran/test-project/typescript',
    get onceScript() {
      return `tsc ${this.path}/Person.interface.ts -w`;
    },
    set script(pathname) {
      this._pathname = pathname;
    },
    get script() {
      return `node ${this.path}/${this._pathname}`
    }
  },

  leetcode: {
    path: '/Users/ran/test-project/leetcode',
    set script(pathname) {
      this._pathname = pathname;
    },
    get script() {
      return `node ${this.path}/${this._pathname}`
    }
  },

  spider_smzdm: {
    excludes: [/\.json/, /\.html/],
    condition: 'spider-node',
    path: '/Users/ran/test-project/spider-node',
    set script(pathname) {
      this._pathname = pathname;
    },
    get script() {
      return `cd ${this.path} && node ./server.js`
    }
  },

  node: {
    excludes: [/\.json/, /\.html/],
    condition: 'test-project',
    path: '/Users/ran/test-project',
    set script(filename) {
      this._filename = filename;
    },
    get script() {
      let pathname = Path.resolve(this.path, this._filename);
      pathname = pathname.replace(/\s/g, '\\ ')
      return `node ${pathname}`
    }
  },

  pwa: {
    excludes: [/\.json/, /\.html/],
    // condition: 'test-project',
    path: '/Users/ran/test-project/pwa/pwa-vue/src',
    set script(filename) {
      this._filename = filename;
    },
    get script() {
      // let pathname = Path.resolve(this.path, this._filename);
      return `cd ${Path.resolve(this.path, '../')} && npm run build`
    }
  },

  algorithm: {
    excludes: [/\.html/],
    // 监听目录
    path: '/Users/ran/test-project/algorithm/Learning JavaScript/dist',
    set script(filename) {
      this._filename = filename;
    },
    get script() {
      let pathname = Path.resolve(this.path, this._filename);
      pathname = pathname.replace(/\s/g, '\\ ')
      return `node ${pathname}`
    }
  },

  // 笔记目录
  learn: {
    excludes: [/\.(json|html|md)$/],
    path: '/Users/ran/Documents/GitHub/knowledgement',
    set script(filename) {
      this._filename = filename;
    },
    get script() {
      // 路径+文件
      let path = Path.resolve(this.path, this._filename)
      return `node ${path}`
    }
  },

  tools: {
    excludes: [/\.json/, /\.html/],
    condition: 'test-project',
    path: '/Users/ran/tools',
    set script(filename) {
      this._filename = filename;
    },
    get script() {
      let pathname = Path.resolve(this.path, this._filename);
      pathname = pathname.replace(/\s/g, '\\ ')
      return `node ${pathname}`
    }
  },

}



