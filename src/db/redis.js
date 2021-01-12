const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.hostfun)
redisClient.on('error',err=>{
    console.error(err)
})

// 设置key-value键值对
function set(key,val){
    if(typeof val === 'object'){
        val = JSON.stringify(val)  //redis的键值对key、value必须为字符串的形式，所以val当传入的字符串为对象的时候，将val装化成JSON类型更方便(如果不转换的话，默认会使用objec.tostring()方法，取值比较不方便)
    }
    redisClient.set(key,val,redis.print)
}

// 获取value值，异步请求
function get(key){
    const promise = new Promise((resolve,reject) =>{
        redisCLient.get(key,(err,val)=>{   //第一个为键值对的key，因为get的请求为异步，所以传入的第二个参数为回调函数
            if(err){
                reject(err)     //如果出现错误，打印出来
                return
            }
            if(val === null){  //如果传入的key不存在，返回null
                resolve(null)
                return
            }

            try{               //将获取出来的val转化成对象的形式
                JSON.parse(val)
            } catch (ex){
                resolve(val)   //如果不是JSON格式的话，转换失败，直接将value传出
            }
        })
    })
    return promise
}

// 导出方法
module.exports = {
    set,
    get
}