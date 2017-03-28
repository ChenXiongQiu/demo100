
import React, {Component} from 'react'
// var  AudioPlayer=require('react-h5-audio-player')
import Loading from 'react-loading'

export default class H5Audio extends Component {
    render() {
        return (
            <div>
                <Loading type='bars' color='red' />
            </div>
        )
    }
}
