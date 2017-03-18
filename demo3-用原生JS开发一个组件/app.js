// 用一个IIFE包裹代码，从而使他们与其他代码隔离开。
(() => {
        // 严格模式用来防止错误和确保ES6特性可用
        'use strict'

// 把员工信息转换成一块标签
function employee_markup (employee) {
    return `<li class="employee">
        <img src="${employee.picture.thumbnail}" alt="Photo of ${employee.name.first}" class="employee-photo">
        <div class="employee-name">${employee.name.first} ${employee.name.last}</div>
        <div class="employee-location">${employee.location.city}, ${employee.location.state}</div>
      </li>`
}


// 获得了员工数据,然后需要通过一些模版解析数据去插入到 .employee-list 中
$.ajax({
  url: 'https://randomuser.me/api/',
  // query string parameters to append
  data: {
    results: 3
  },
  dataType: 'json',
  success: (data) => {
      // 成功！我们获得数据！
    //  alert(JSON.stringify(data))
    // 用ES6中字符串连接符${}去拼接模板
    // let employee = `<li class="employee">
    //     <img src="${data.results[0].picture.thumbnail}" alt="Photo of ${data.results[0].name.first}" class="employee-photo">
    //     <div class="employee-name">${data.results[0].name.first} ${data.results[0].name.last}</div>
    //     <div class="employee-location">${data.results[0].location.city}, ${data.results[0].location.state}</div>
    //   </li>`
    let employees_markup = ''
    data.results.forEach((employee) => {
        employees_markup += employee_markup(employee)
    })
      $('.js-employee-list').append(employees_markup)
    }
  })
}


// // 原生JS的ajax请求
// // 创建一个新的 XMLHttpRequest。这是在框架下使用ajax的方法
// const xhr = new XMLHttpRequest()
// // 声明HTTP请求方法和地址
// xhr.open('GET','https://randomuser.me/api/?results=3')
//   // in a GET request what you send doesn't matter GET 请求
//   // in a POST request this is the request body
//   xhr.send(null)
// //   等待'readystatechange' 状态改变去触发xhr 对象
// xhr.onreadystatechange = function() {
//     // 等待xhr成功返回
//     if(xhr.readyState !==4) {return}
//     // 非200状态时输出错误信息
//     if(xhr.status !==200) {return}

//     // 一切正常输出响应
//     console.log(xhr.responseText)
// }


)()