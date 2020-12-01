const { getList } = require('../controller/blog')
const { SuccessModel, Error } = require('../model/resModel')

const handleBlogRouter = (req,res)=>{
    const method = req.method //GET POST
    

    // 获取博客列表
    if(method==='GET'&&req.path==='/api/blog/list'){
        const anthor = req.query.anthor || ''
        const keyword = req.query.keyword || ''
        const listData = getList(anthor,keyword)
        return new SuccessModel(listData)
    }
    if(method ==='GET'&&req.path==='/api/blog/detial'){
        return{
            msg:'这是获取博客详情的接口'
        }
    }
    if(method==='POST'&&req.path==='/api/blog/new'){
        return {
            msg:'这是新建博客的接口'
        }
    }
    if(method==='POST'&&req.path==='/api/blog/update'){
        return{
            msg:'这是更新博客的接口'
        }
    }
    if(method==='POST'&&req.path==='/api/blog/del'){
        return{
            msg:'这是删除博客的接口'
        }
    }
}

module.exports = handleBlogRouter