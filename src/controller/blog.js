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

module.exports = {
    getList
}