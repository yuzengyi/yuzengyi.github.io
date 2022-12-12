/**
 * 图谱数据源
 */
export const data = [
    {
        id:1,
        name:'行列式',
        categary:'百科',
        children:[
            {
                id:11,
                categary:'',
                name:'cramer法则',
                children:[
                    {
                        id:101,
                        name:'概念',
                        categary:'',
                    },
                    {
                        id:102,
                        name:'求解方程组',
                        categary:'用法',
                    }
                ],
            },
            {
                id:12,
                categary:'',
                name:'Laplace定理',
            },
            {
                id:13,
                name:'计算方法',
                    categary:'应用',
                    children:[
                        {
                            id:103,
                            name:'范德蒙德行列式',
                            categary:'特殊行列式',
                            children:[
                                {
                                    id:1001,
                                    name:'概念',
                                    categary:''
                                },
                                {
                                    id:1002,
                                    name:'计算方法',
                                    categary:'应用'
                                }
                            ]
                        },
                        {
                            id:104,
                            name:'余子式展开法',
                            categary:'按行/列展开',
                            children:[
                                {
                                    id:1003,
                                    name:'概念',
                                    categary:''
                                },
                                {
                                    id:1004,
                                    name:'展开方式',
                                    categary:''
                                }
                            ]
                        },
                        {
                            id:105,
                            name:'对角线法则',
                            categary:'直接计算',
                            children:[
                                {
                                    id:1005,
                                    name:'二阶',
                                    categary:''
                                },
                                {
                                    id:1006,
                                    name:'三阶',
                                    categary:''
                                }
                            ]
                        }
                    ]
                
            },
            {
                id:14,
                name:'性质',
                categary:'',
                children:[
                    {
                        id:106,
                        name:'逆矩阵的行列式值不变',
                        categary:''
                    },
                    {
                        id:107,
                        name:'交换两行/两列变号',
                        categary:''
                    },
                    {
                        id:108,
                        name:'两行/两列对应成比例，行列式为零',
                        categary:''
                    }
                ]
            },
        ]
    },

    {
        id:2,
        name:'矩阵的基本性质',
        categary:'百科',
        children:[
            {
                id:15,
                categary:'',
                name:'矩阵的加减、数乘',
                children:[
                    {
                        id:109,
                        name:'概念',
                        categary:'',
                        
                    },
                    {
                        id:110,
                        name:'求解方程组',
                        categary:'用法',
                    }
                ],
            },
            {
                id:16,
                categary:'',
                name:'矩阵的乘法',
            },
            {
                id:17,
                name:'矩阵的变换',
                    categary:'应用',
                    children:[
                        {
                            id:111,
                            name:'行阶梯型',
                            categary:'特殊行列式',
                            children:[
                                {
                                    id:1007,
                                    name:'概念',
                                    categary:''
                                },
                                {
                                    id:1008,
                                    name:'计算方法',
                                    categary:'应用'
                                }
                            ],
                            id:112,
                            name:'行最简型',
                            categary:'特殊行列式',
                            children:[
                                {
                                    id:1009,
                                    name:'概念',
                                    categary:''
                                },
                                {
                                    id:1010,
                                    name:'计算方法',
                                    categary:'应用'
                                }
                            ],
                            id:113,
                            name:'标准型',
                            categary:'特殊行列式',
                            children:[
                                {
                                    id:1011,
                                    name:'概念',
                                    categary:''
                                },
                                {
                                    id:1012,
                                    name:'计算方法',
                                    categary:'应用'
                                }
                            ]
                        },
                        {
                            id:114,
                            name:'余子式展开法',
                            categary:'按行/列展开',
                            children:[
                                {
                                    id:1013,
                                    name:'概念',
                                    categary:''
                                },
                                {
                                    id:1014,
                                    name:'展开方式',
                                    categary:''
                                }
                            ]
                        },
                        {
                            id:115,
                            name:'对角线法则',
                            categary:'直接计算',
                            children:[
                                {
                                    id:1015,
                                    name:'二阶',
                                    categary:''
                                },
                                {
                                    id:1016,
                                    name:'三阶',
                                    categary:''
                                }
                            ]
                        }
                    ]
                
            },
            {
                id:6,
                name:'性质',
                categary:'',
                children:[
                    {
                        id:30150,
                        name:'逆矩阵的行列式值不变',
                        categary:''
                    },
                    {
                        id:30151,
                        name:'交换两行/两列变号',
                        categary:''
                    },
                    {
                        id:30152,
                        name:'两行/两列对应成比例，行列式为零',
                        categary:''
                    }
                ]
            },
        ]
    },
    
]

/**
 * 模糊查询大类
 * @param {*} name 
 */
export const search = (name)=>{
    return new Promise((resolve,reject)=>{
        let result = []
        let list = data.filter(item=>item.name.indexOf(name)>=0)
        if(list&&list.length>0){
            result = list||[]
        }
        if(result.length>0){
            resolve(result)
        }else{
            reject()
        }
    })
}

/**
 * 点击节点展开
 * @param {*} id 
 */
export const expendNodes = (id)=>{
    return new Promise((resolve,reject)=>{
        let totalList = []
        //拆除来所有的children到第一层
        data.forEach(item=>{
            getDeepChildrens(totalList,item,0)
        })

        let list = []
        for(let item of totalList){
            if(item.parentId.toString() === id){
                const {children,...reset} = item
                list.push({
                    ...reset
                })
            }
        }
        if(list.length>0){
            resolve(list)
        }else{
            reject()
        }
        
    })
    
}

/**
 * 递归数组,把所有children都拆出来到第一层
 * @param {*} list 
 * @param {*} item 
 */
function getDeepChildrens(list,item,parentId){
    const {children,...reset} =  item
    list.push(
        {
            ...reset,
            parentId,
        }
    )
    if(children&&children.length>0){
        children.forEach(child=>{
            getDeepChildrens(list,child,item.id)
        })
    }
}

/**
 * 分类数据
 */
export const categarys =  ["行列式","矩阵","向量","二次型","特征向量"]