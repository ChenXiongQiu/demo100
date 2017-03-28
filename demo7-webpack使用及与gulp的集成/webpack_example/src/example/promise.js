


// 异步回调深层嵌套会带来好多问题
// 1、不方便查看代码和维护代码
// 2、可能会污染变量的使用
var url1="http://123.56.7.88:3003/getUserId?code=1&tocken=56753675236752673"
$ajax.get(url1,function(data){
    var userId=data.userId
    var url2="http://123.56.7.88:3003/getUserName?userId="+userId
    $ajax.get(url2,function(data){
        var userName=data.userName
        $ajax.get(url2,function(data){
            var userName=data.userName
            userName=userName+"shiguqoong"
            $ajax.get(url2,function(data){
                var userName=data.userName
                $ajax.get(url2,function(data){
                    var userName=data.userName
                    $ajax.get(url2,function(data){
                        var userName=data.userName
                    })
                })
            })
        })
    })
})

var promise=new Promise(function(resolve,reject){
    var url1="http://123.56.7.88:3003/getUserId?code=1&tocken=56753675236752673"
    $ajax.get(url1,function (data) {
        resolve(data)
    })
})
    .then(function (data) {
        var userId=data.userId
        var url2="http://123.56.7.88:3003/getUserName?userId="+userId
        $ajax.get(url2,function (data) {
            console.log(data)
        })
    })
    .then(function (data) {
        var userId=data.userId
        var url2="http://123.56.7.88:3003/getUserName?userId="+userId
        $ajax.get(url2,function (data) {
            console.log(data)
        })
    })
    .then(function (data) {
        var userId=data.userId
        var url2="http://123.56.7.88:3003/getUserName?userId="+userId
        $ajax.get(url2,function (data) {
            console.log(data)
        })
    })
    .then(function (data) {
        var userId=data.userId
        var url2="http://123.56.7.88:3003/getUserName?userId="+userId
        $ajax.get(url2,function (data) {
            console.log(data)
        })
    })
