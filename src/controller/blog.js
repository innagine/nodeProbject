const {exec} = require('../db/mysql')

const getList = (author,keyword) =>{
    let sql = 'select * from blogs where 1=1 '
    if(author){
        sql += "and author= '"+author+"' "
        // console.log('A:',sql)
    }
    if(keyword){
        sql+= "and title like '%"+keyword+"%' "
        // console.log('K:',sql)
    }
    sql+= 'order by createtime desc;'
    // console.log('O:',sql)
    // 返回的是promise
    return exec(sql)
}

const getDetail = (id) =>{
    const sql = "select * from blogs where id='"+id+"'"
    return exec(sql).then(rows =>{
        return rows[0] //从数组中抽出一个对象
    })
}

const newBlog = (blogData = {}) =>{
    //blogData 是一个博客对象，包含 title content author属性
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createtime = Date.now()

    const sql = "insert into blogs (title, content, createtime, author)"
                +"values ('"+title+"','"+content+"','"+createtime+"','"+author+"')" 
    
    return exec(sql).then(insertDate =>{
        console.log("insertDate is:",insertDate)
        return {
            id:insertDate.insertId
        }
    })
}

const updateBlog = (id, blogData = {}) =>{
    // id就是要更新博客的id
    // blogData 是一个博客对象，包含title content 属性
    
    const title = blogData.title
    const content = blogData.content

    const sql = "update blogs set title='"+title+"',content='"+content+"' where id="+id
    console.log("updateSQL:",sql)

    return exec(sql).then(updateDate =>{
        console.log("updateDate is :",updateDate)
        if(updateDate.affectedRows >0){
            return true
        }
        return false
    })
}

const delBlog = (id, author) =>{
    //id ：就是要删除博客的id
    const sql = "delete from blogs where id ="+id+" and author='"+author+"';"
    console.log("deleteSQL:",sql)

    return exec(sql).then(delDate =>{
        console.log(delDate)
        if(delDate.affectedRows>0){
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog,
}