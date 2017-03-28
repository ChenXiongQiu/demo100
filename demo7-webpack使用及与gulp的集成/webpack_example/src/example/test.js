test=()=>{
    // var func = async function (){
    //     console.log(1)
    //     var f1 = await func1()
    //     console.log(2)
    //     var f2 = await func2()
    // }
    //
    // var func1 = async function (){
    //     setTimeout(function () {
    //         console.log(3)
    //     },3000)
    // }
    //
    // var func2 = async function (){
    //     setTimeout(function () {
    //         console.log(4)
    //     },2000)
    // }
    //
    // func()



    // Promise.all方法的实现
    // const p1=new Promise(function (resolve,reject) {
    //      setTimeout(function () {
    //          resolve('p1')
    //      },2000)
    //
    // })
    //  const p2=new Promise(function (resolve,reject) {
    //      setTimeout(function () {
    //          resolve('p2')
    //      },1000)
    //  })
    //  const p3=new Promise(function (resolve,reject) {
    //      setTimeout(function () {
    //          resolve('p3')
    //      },3000)
    //  })
    //
    //
    //  const pAll = Promise.race([p1, p2, p3]);
    //  pAll.then(
    //      function (data) {
    //          console.log(data)
    //      },
    //      function (reason) {
    //          console.log(reason)
    //      }
    //  )


    //
    // const pAll = Promise.all([p1, p2, p3]);
    // pAll.then(
    //     function (data) {
    //         console.log(data)
    //     },
    //     function (reason) {
    //         console.log(reason)
    //     }
    // )









    // 1、对象的深拷贝
    // var obj1={
    //     name:'shiguoqing',
    //     age:999,
    //     data:{
    //         sex:"人妖"
    //     }
    // }

    // 2017年要学习的一些东西
    // https://my.oschina.net/hardbone/blog/805349

    // yarn
    // http://www.open-open.com/lib/view/open1478485680274.html

    // immutable.js
    // https://segmentfault.com/a/1190000002909224
    // https://zhuanlan.zhihu.com/p/20295971?columnSlug=purerender
    // var Immutable = require('immutable');
    // var obj2 = Immutable.fromJS(obj1);
    // console.log(obj2)
    // obj2.setIn('data', {sex:"男"});
    // Object扩展
    // var obj2=Object.assign({},obj1);
    // 属性扩散
    // var obj2={...obj1}
    // obj2.data.sex="黑马"
    //
    // console.log(obj1.data.sex)
    // console.log(obj2.get('data'))


    var obj1={
        name:"shiguoqing",
        data:{
            age:123
        },
        func1:function () {
            console.log(11111111111111111111111)
        }
    }
    var objStr=JSON.stringify(obj1)
    var obj2=JSON.parse(objStr)
    console.log(obj1.data===obj2.data)
    // obj2.func1()
    console.log(obj2)


}
