const {loginCheck} =require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req,res)=>{
    const method = req.method

    //登陆
    if(method==='POST'&&req.path==='/api/user/login'){
        const {username,password} = req.body //解构取值
        const result = loginCheck(username,password)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('登陆失败')
        }
    }
}

module.exports = handleUserRouter