import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

     state = {
            loadedPost: null
        }

    componentDidMount(){
            this.loadData();
        }
    componentDidUpdate(){
            this.loadData();
    }
   
    loadData=()=>{
         console.log(this.props.match.params.id)
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)){
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
            .then(response => {
                this.setState({loadedPost: response.data})
            })
            }
            }
    }   
    deletePostHandler = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
            .then(response => {
                console.log(response)
            }); 
    }    

    render () {
        let post = <p className="title">Please select a Post!</p>;

         if(this.props.id){
            <p className="title">Loading.....</p>;
         }

        if(this.state.loadedPost){
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button onClick= {this.deletePostHandler}className="Delete">Delete</button>
                </div>
            </div>

        );
    }
        return post;
    }
}

export default FullPost;