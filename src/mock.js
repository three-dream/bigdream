const Mock = require('mockjs')
const Random = Mock.Random

const newsData = function () {

    return {
        code: 0,
        msg: "操作成功",
        // data: articles,
    }

}

const mainData = function () {
    let articles = [{a:'家用电器'},{a:'手机'},{a:'家具'},{a:'汽车'},{a:'数码'},{a:'男装'},{a:'护肤品'},{a:'零食'},{a:'箱包'}]


    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}

const objectsort = function () {
    let articles = [{kuaidiname: '张三', kuaidiphone: '15048856666', kuaidiaddresss: '浙江省杭州市余杭区阿里巴巴总部D栋楼三层阿里巴巴总部研发中心'},]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}


const mainsData = function () {
    let articles = [{a:'小米'},{a:'荣耀'},{a:'华为'},{a:'红米'},{a:'苹果'},{a:'vivo'},{a:'oppo'}]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}


const sortsData = function () {
    let articles = [{a:'玫瑰金'},{a:'红色'},{a:'蓝泽'},{a:'玫瑰红'}]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}

const detailData = function () {
  let articles = {first:'手机'
  ,second:'手机',third:'iPhone ',fourth:'iphone 11'
  ,name:'iPhone 11',pro_num:1,place: '常熟运输中心',
  price:'5699',pingjia:'',url:'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b8389b504fc2d56247f25c4cec1190ef77c66c9d.jpg'}

  return {
      code: 0,
      msg: "操作成功",
      data: articles,
  }

}


const asData = function () {
    let articles = [{a:'小米'},{a:'荣耀'},{a:'华为'},{a:'MAC'},{a:'联想'},{a:'vivo'},{a:'oppo'}]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}
const Data = function () {
    return {
        code: 0,
        msg: "操作成功",
    }

}

Mock.setup({
    timeout: 500
})

// ``请严格注意get请求的地址``
Mock.mock('/api/user/loginuser', 'post',newsData )   //post请求
Mock.mock(RegExp("/api/user/loginuser"+".*"), 'get', newsData)   //get请求
Mock.mock('/api/user/user', 'post',Data )   //post请求
Mock.mock(RegExp("/api/user/user"+".*"), 'get', Data)   //get请求
Mock.mock('/api/user/main', 'post',mainData )   //post请求
Mock.mock(RegExp("/api/user/main"+".*"), 'get', mainData)
Mock.mock('/api/user/sort', 'post',mainsData )   //post请求
Mock.mock(RegExp("/api/user/sort"+".*"), 'get', mainData)
Mock.mock('/api/user/sorts', 'post',asData )   //post请求
Mock.mock(RegExp("/api/user/sorts"+".*"), 'get', asData)
Mock.mock('/api/user/sortobject', 'post',objectsort )   //post请求
Mock.mock(RegExp("/api/user/sortobject"+".*"), 'get', objectsort)
Mock.mock('/api/user/detail', 'post',detailData )   //post请求
Mock.mock(RegExp("/api/user/detail"+".*"), 'get', detailData)
Mock.mock('/api/user/phonesorts', 'post',sortsData )   //post请求
Mock.mock(RegExp("/api/user/phonesorts"+".*"), 'get', sortsData)