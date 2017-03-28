// react中的属性校验
import React, { Component } from 'react'
import Loading from 'react-loading'

export default class Loader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Loading type='bars' color='red' />
        );
    }
}
