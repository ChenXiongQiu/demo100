//react中操作dom元素
import React, { Component } from 'react';

export default class FindDom extends Component {

    // 初始化state
    // state={
    //     userInput: ''
    // }

    constructor(props) {
        super(props);
        this.state={
            userInput: ''
        };
    }

    componentWillMount(){
        // console.log(this.refs.theInput1)
    }

    handleChange(e) {
        // 1、通过ref和this.refs的配合使用可以在react中获取dom元素，dom元素上所有的属性方法都可以使用
        // 2、通过this.refs获取dom元素是有使用位置限制的,必须子啊componentDidMount方法里面或者之后的生命周期方法中使用
        // 3、react中是不推荐你用document.getElementById的方式去获取dom元素的
        // console.log(this.refs.theInput1)
        // console.log(this.refs.theInput1.value);
        this.setState({ userInput: e.target.value });
    }

    clearAndFocusInput() {
        console.log(this.refs.theInput1.value)
        // 第一个参数是你要从新赋值的state，第二个参数一个回调函数
        this.setState({ userInput: '' }, () => {
            this.refs.theInput1.focus();
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput1"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}
