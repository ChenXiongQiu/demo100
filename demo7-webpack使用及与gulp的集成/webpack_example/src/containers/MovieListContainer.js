import React, {Component} from 'react'
import service from '../services/movieService.js'
import '../styles/movieList.css'

export default class MovieListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading:true,
            movieListData:[]
        }
    }

    componentDidMount(){
        this.fetch()
    }


    fetch=()=>{
        let _this=this
        let promise=service.getMovieListData()
        promise.then(function(data) {
            _this.setState({
                isLoading:false,
                movieListData:data.subjects
            })
        },function (err) {

        })

       // let data=await
       //               service.getMovieListData()
       //  console.log(data)

    }

    renderLoading=()=>{
        return (
            <div>
               正在加载数据。。。
            </div>
        )
    }

    renderMovieList=()=>{
        return (
            <div className="movieList_container">
                {this.state.movieListData.map(this.renderRow)}
            </div>
        )
    }

    renderRow=(item)=>{
        return (
            <div className="movieList_item" key={item.id+Math.random()}>
                <div>
                    <img src={item.images.small} alt=""/>
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <span>{item.year}</span>
                </div>
            </div>
        )
    }

    render() {
        if(this.state.isLoading){
            return this.renderLoading()
        }else{
            return this.renderMovieList()
        }
    }
}