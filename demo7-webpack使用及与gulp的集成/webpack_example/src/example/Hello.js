
import React, {Component} from 'react'

import './Hello.css'
import './Hello.scss'

// 直接在js中定义样式，内嵌样式,样式名称必须按照驼峰命名方式
let style = {
    backgroundColor: 'blue'
}

var a=12
// console.log('1111111111111')

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1 style={style} onClick={()=>this.myClick("fdfdf",23)}>5期</h1>
                {}
                <br/>
                <img src="images/demo.jpg"/>
            </div>
        )
    }
}
