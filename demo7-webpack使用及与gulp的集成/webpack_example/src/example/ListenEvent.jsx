// react中的dom监听事件
import React, { Component } from 'react';

export default class ListenEvent extends Component {
    constructor(props) {
        super(props);
        //this.state={ userInput: '' };
    }

    // 演示错误添加监听事件
    componentWillMount() {
        //window.addEventListener('resize', this.handleResize);
    }


    componentDidMount() {
        // 1、在已经插入到真实的dom节点之后，注册窗体改变大小的事件监听
        // 3、用ajax发起数据请求的操作也要在componentDidMount方法里面去调用
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // 2、在组件将要被卸载的时候移除监听事件，防止对其他组件的影响
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize=(e)=>{
        console.log(window.innerWidth);
    }

    render() {
        return (
            <div>
                <div>
                   dom事件监听
                </div>
            </div>
        );
    }
}

