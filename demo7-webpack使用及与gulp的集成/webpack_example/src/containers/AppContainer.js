import React, {Component} from 'react'
import {Link} from 'react-router'

import '../styles/root.css'
import '../styles/app.css'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="app_container">
                <div className="app_header">
                    <Link to="/home">首页</Link>
                    <Link to="/movie">电影</Link>
                    <Link to="/about">联系我们</Link>
                </div>
                <div className="app_content">
                    {/*这其实就是路由的坑，相当于ng-view*/}
                    {this.props.children}
                </div>
                <div className="app_footer">
                    <span>深圳3期</span>
                </div>
            </div>
        )
    }
}