const getList = (author,keyword) =>{
    // 返回假数据（格式是正确的）
    return[
        {
            id:1,
            title:'标题A',
            content:'内容A',
            createTime:1604327950979,
            author:'zhangshan'
        },
        {
            id:2,
            title:'标题B',
            content:'内容B',
            createTime:1604328012417,
            author:'limimi'
        },
    ]
}

const getDetail = (id) =>{
    //先返回假数据
    return {
        id:1,
        title:'标题A',
        content:'内容A',
        createTime:1604327950979,
        author:'zhangshan'
    }
}

const newBlog = (blogData = {}) =>{
    //blogData 是一个博客对象，包含 title content 属性
    console.log('newBlog blogData....', blogData)
    return {
        id:3 // 表示新建博客，插入到数据表里面的 id
    }
}

const updateBlog = (id, blogData = {}) =>{
    // id就是要更新博客的id
    // blogData 是一个博客对象，包含title content 属性
    console.log('updata blog',id,blogData)
    return true
}

const delBlog = (id) =>{
    //id ：就是要删除博客的id
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog,
}