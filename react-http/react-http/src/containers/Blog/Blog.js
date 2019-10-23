import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'

import FullPost from './FullPost/FullPost'
import './Blog.css';

class Blog extends Component {

    render () {
       
        return (
            <div>
                <header>
                    <nav className='Blog'>
                        <ul>
                            <li><NavLink to="/posts" exact>Home</NavLink></li>
                            <li><NavLink to={{pathname: '/new-post'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact 
                render ={() => <h1>Home</h1>}/>*/}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="posts" />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;