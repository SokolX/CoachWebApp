import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import '../style/App.scss';
import _ from 'lodash';
import PostCard from '../components/PostCard';
import { getUser, logout } from '../actions/UserActions';
import { required } from '../helpers/ReduxFormValidation';

class App extends Component {

    renderNavbar() {
            
        return(
                <nav class="navbar navbar-expand-lg navbar-fixed-top">
                    <a class="navbar-brand" title="Dane sportowców">
                        <Link to="/training"><img src="ic_ludzik.png" alt="Coach logo"/>Coach</Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-reorder"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" title="Dane sportowców"><Link to="/players">Sportowcy</Link></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" title="Treningi sportowców"><Link to="/training">Treningi</Link></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" title="Pomiary BMI sportowców"><Link to="/bmi">BMI</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" title="Napisz post na blogu"><Link to="/blog">Blog</Link></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" title="Rozmowy ze sportowcami"><Link to="/messages">Wiadomości</Link></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" title="Twoje dane"><Link to="/account">Konto</Link></a>
                        </li>
                        <li class="nav-item last-item">
                          <a class="nav-link"  title="Opuść aplikację"onClick={() => { this.props.logout();}}>Wyloguj</a>
                        </li>
                       </ul>
                    </div>
                </nav>
                );
    }
    
    renderPosts() {
        return _.map(this.props.posts, (post, key) => {
            return (
                    <PostCard key={key}>
                        <Link to={`blog/${key}`}><h2 class="card-header">{post.title}</h2></Link>
                        <p className="card-text">
                            {post.body}
                        </p>
                        <div class="card-footer btnPost">
                            <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Usuń</button>
                        </div>
                    </PostCard>
                    );
        });
    }

    renderField(field) {
        
        const errStyle = {
            borderColor: 'red'
        };

        return (
            <input type="text" placeholder={`Podaj tytuł posta...`} { ...field.input } 
                    className={ field.class } 
                    style={ field.meta.touched && field.meta.error ? errStyle : null }/>
            );
    }

    renderTextarea(field) {
        
        const errStyle = {
            borderColor: 'red'
        };

        return (
            <textarea type="text" placeholder={`Wpisz treść posta...`} { ...field.input } 
                    className={ field.class } 
                    style={ field.meta.touched && field.meta.error ? errStyle : null }/>
            );
    }
    
    onSubmit(values) {
        this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
    }

    render() {
        
        const {handleSubmit} = this.props;
        
        return (
                
                <div>
                    { this.renderNavbar() }
                    <div class="scroll">
                        <div class="main account">
                            { this.renderPosts() }       
                        
                    </div>
                        <div class="containerInput">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm-post">              
                                <Field
                                    name="title"
                                    component={this.renderField}
                                    label="Title"
                                    class="footer-title-post"
                                    validate={required}
                                    />
                                <Field
                                    name="body"
                                    component={this.renderTextarea}
                                    label="Body"
                                    class="footer-body-post"
                                    validate={required}
                                    />
                                <button type="submit" className="btn footer-button-post"><b>Publikuj</b></button>
                            </form>
                        </div>
                    </div>
                </div>
                );
    }
}
;

let form = reduxForm({
    form: 'NewPost'
})(App);

form = connect((state, ownProps) => ({
        posts: state.posts,
        user: state.user
    }), {savePost, getPosts, deletePost, getUser, logout }
)(form);

export default form;