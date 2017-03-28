// react中的dom监听事件
import React, { Component } from 'react' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './animate.css'


export default class Animate extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {items: ['hello', 'world', 'click', 'me']} 
        this.handleAdd = this.handleAdd.bind(this) 
    }


    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]) 
        this.setState({items: newItems}) 
    }

    handleRemove(i) {
        let newItems = this.state.items.slice() 
        newItems.splice(i, 1) 
        this.setState({items: newItems}) 
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        )) 

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item1</button>
                {/*这个组件虽然叫动画，但是它只负责显示隐藏的动画*/}
                {/*你想让谁有显示隐藏的动画你就用ReactCSSTransitionGroup包裹谁*/}
                {/*后添加进去的元素和删除的元素才有动画效果，同时添加元素和ReactCSSTransitionGroup是没有动画效果的*/}
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionAppear={true}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        ) 
    }
}

