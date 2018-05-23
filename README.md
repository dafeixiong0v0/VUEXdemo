# myvuex

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#三、 Module 模块化
当项目越来越大的时候,单个 store 文件,肯定不是我们想要的, 所以就有了模块化. 假设 src/store 目录下有这2个文件

moduleA.js

export default {
    state: { ... },
    getters: { ... },
    mutations: { ... },
    actions: { ... }
}

moduleB.js

export default {
    state: { ... },
    getters: { ... },
    mutations: { ... },
    actions: { ... }
}
那么我们可以把 index.js 改成这样

import moduleA from './moduleA'
import moduleB from './moduleB'

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB
    }
})
这样我们就可以很轻松的把一个store拆分成多个

# 四、 总结 
 >> actions 的参数是 store 对象,而 getters 和 mutations 的参数是 state .
>>actions 和 mutations 还可以传第二个参数,具体看vuex官方文档
>>getters/mutations/actions 都有对应的map,如: mapGetters , 具体看vuex官方文档
>>模块内部如果怕有命名冲突的话,可以使用命名空间, 具体看vuex官方文档
>>vuex 其实跟 vue 非常像,有data(state),methods(mutations,actions),computed(getters),还能模块化.
如果觉得本文对您有用，请给本文的github加个star,万分感谢
 [本实例来自github](https://github.com/noahlam/articles/blob/master/vuex%E5%85%B6%E5%AE%9E%E8%B6%85%E7%AE%80%E5%8D%95%2C%E5%96%9D%E5%AE%8C%E8%BF%993%E6%AD%A5%2C%E8%BF%98%E6%9C%893%E6%AD%A5.md#%E5%9B%9B-%E6%80%BB%E7%BB%93）
另外，github上还有其他一些关于前端的教程和组件，有兴趣的童鞋可以看看，你们的支持就是我最大的动力。