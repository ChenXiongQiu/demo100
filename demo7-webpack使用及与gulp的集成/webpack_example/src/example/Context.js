import React, {Component} from 'react' 

var Child = React.createClass({
    // 在孙子里面校验祖宗里面的属性
    contextTypes: {
        color: React.PropTypes.string
    },
    render: function() {
        return (
            <div>
                <h1>{this.context.age}</h1>
                <button style={{background: this.context.color}}>
                    按钮
                </button>
            </div>
        ) 
    }
}) 

var Son = React.createClass({
    render: function() {
        return (
            <div>
                <Child/>
            </div>
        ) 
    }
}) 

var Parent = React.createClass({
    // 通过这个方法去传递属性
    getChildContext: function() {
        return {
            color: "green"
        } 
    },
    // 传递给子孙属性的类型校验
    childContextTypes: {
        color: React.PropTypes.string
    },

    render: function() {
        return <div><Son/></div>
    }
}) 

export default Parent
