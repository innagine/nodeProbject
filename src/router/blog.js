const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

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
        const id = req.query.id
        const data = getDetail(id)
        return new SuccessModel(data)
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