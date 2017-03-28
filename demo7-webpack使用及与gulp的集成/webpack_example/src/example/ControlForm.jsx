//dom操作demo
import React, { Component } from 'react';

export default class ControlForm extends Component {
    state={
        userInput: ''
    }

    constructor(props) {
        super(props);
        //this.state={ userInput: '' };
    }

    handleChange(e) {

        // 1、在react中思想是每一个组件的状态都应该为组件本身所控制
        // 2、受控表单组件中的value值是要和state属性绑定的，受控表单组件只能通过onChange方法去改变state的值，从而触发页面的从新渲染绑定

        // 3、扩展：WebComponent <x-search>,一定是未来的趋势

        // 方法一：用refs获取属性值
        console.log(this.refs.theInput1.value);
        let inputStr="";
        if(e.target.value.length>=8){
            inputStr=e.target.value.slice(0,5)+"...";
        }else{
            inputStr=e.target.value;
        }
        // 方法二：用事件参数获取属性值
        this.setState({ userInput:inputStr});
    }

    clearAndFocusInput() {
        // 第一个参数是你要从新赋值的state，第二个参数一个回调函数
        this.setState({ userInput: '' }, () => {
            this.refs.theInput.focus();
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                {/*受控表单组件改变输入框的写法*/}
                <input
                    ref="theInput1"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
                <br/>
                {/*受控表单组件写死了value值，永远不会改变了*/}
                <input
                    ref="theInput"
                    value='shiguoqing'
                />
                <br/>
                {/*非受控表单组件它里面输入框值的改变不被react控制*/}
                <input
                    ref="theInput"
                />
            </div>
        );
    }
}
