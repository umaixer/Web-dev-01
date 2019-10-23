import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Route, Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost'

class Posts extends Component{

	state = {
    posts: [],
    selectedPostId: null,
    error: false
   } 

    componentDidMount(){
    	console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts= posts.map(post => {
                    return {   
                        ...post,
                        Author: "Umair"
                    }                   
                });
                this.setState({posts: updatedPosts})
                console.log(response)
            })

            .catch(error =>{
                console.log(error);
                this.setState({error: true});
                console.log(this.state.error);
            });
    }

    postSelectHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
    };

	render(){

		 let posts = <p> Something Went Wrong</p>

        if(!this.state.error){
             posts = this.state.posts.map(post => {
            return ( 
            //<Link to={'/'+post.id} key={post.id}>
            <Post  title={post.title} 
            author={post.Author} key={post.id}
            clicked={() => this.postSelectHandler(post.id)}/>
            //</Link>
            );
        })  
        }


		return (
			<div>
				<section className="Posts">
                   {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
			</div>
			
			)
	}
}

export default Posts;