const {login} =require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')



const handleUserRouter = (req,res)=>{
    const method = req.method

    //登陆
    if(method==='GET'&&req.path==='/api/user/login'){
        // const {username,password} = req.body //解构取值
         const {username,password} = req.query //解构取值
        const result = login(username,password)
        return result.then(data =>{
            if(data.username){

                //设置session
                req.session.username = data.username
                req.session.realname = data.realname
                
                console.log("req.session is:",req.session)
                return new SuccessModel()
            }else{
                return new ErrorModel('登陆失败')
            }
        })
        
    }

    //登陆验证测试
    if(method === 'GET' && req.path === '/api/user/login-test'){
        console.log("req.sessione is :",req.session)
        if(req.session.username){
            return Promise.resolve(new SuccessModel(
                {session:req.session}
            )) 
        }
        return Promise.resolve(new ErrorModel('尚未登陆'))
    }
}

module.exports = handleUserRouter