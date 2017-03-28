import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export default class MovieDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static contextTypes={
        router: React.PropTypes.object
    }

    componentDidMount(){
        let _this=this
        setTimeout(function () {
            _this.context.router.push('/home')
            // browserHistory.push('/home')
        },3000)
    }

    render() {
        return (
            <div>
                moviedetailcontainer页面
            </div>
        )
    }
}