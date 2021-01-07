function Database() {
    // 初始化，获取数据库id值
    let id = localStorage['id']
    // 如果id值不存在就设置为0，并存入localStorage
    id = id ? id : (() => { localStorage['id'] = 0; return 0 })()

    // 插入数据
    // tableName: 表名
    // data: 要加入的数据
    this.insert = (tableName, data) => {
        let table = getTable(tableName)
        // 设置id
        data.id = id
        localStorage['id'] = ++id
        table[data.id] = data
        localStorage[tableName] = JSON.stringify(table)

        // 设置缓存数组
        tableToArr(table, tableName)
    }
    
    // 修改
    this.update = (tableName, data) => {
        let table = getTable(tableName)
        table[data.id] = data
        localStorage[tableName] = JSON.stringify(table)

        // 设置缓存数组
        tableToArr(table, tableName)
    }

    // 查询列表
    // tableName: 表名
    this.getList = (tableName) => {
        let table = localStorage[tableName + 'Array']
        return table ? JSON.parse(table) : []
    }

    // 获取一个数据
    // tableName: 表名
    // id: 数据id
    this.getOne = (tableName, id) => {
        let table = getTable(tableName)
        return table[id]
    }

    // 删除
    // tableName: 表名
    // id: 数据标识
    this.remove = (tableName, id) => {
        let table = getTable(tableName)
        delete table[id]
        localStorage[tableName] = JSON.stringify(table)
        tableToArr(table, tableName)
    }

    function getTable(tableName) {
        let table = localStorage[tableName]
        table = table ? JSON.parse(table) : {}
        return table
    }

    function tableToArr(table, tableName) {
        let arr = []
        for (let key in table) {
            arr.push(table[key])
        }
        arr = arr.reverse()
        localStorage[tableName + 'Array'] = JSON.stringify(arr)
    }
}

const db = new Database()