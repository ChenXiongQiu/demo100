//Todolistdemo

import React, {Component} from 'react';


// 循环生成额列表组件
class TodoList extends Component{
    render() {
        let createItem = function(item) {
            return <li key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}
//var Item = React.createClass({
//    render: function() {
//        return <li key={item.id} onClick={this.props.deleteItem}>{item.text}</li>;
//    }
//});

class TodoApp extends Component{

    constructor(props){
        super(props);
        // 初始化了我们的state，这是被推荐的写法
        this.state = {
            items: [],// 存我们输入的数据
            text: ''  // 每次输入文本
        };
    }

    // 输入框change事件
    onChange=(e)=> {
        this.setState({text: e.target.value});
    }
    handleSubmit=(e)=> {
        e.preventDefault();

        let nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        let nextText = '';
        this.setState({items: nextItems, text: nextText});
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 0)}</button>
                </form>
            </div>
        );
    }
}

export default TodoApp;
//moudle.exports=TodoApp;