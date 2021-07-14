import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import PostForm from './PostsForm';

function Posts(props) {
  let outPostData = props.proffilePage.postData.map((elem)=>{
    return (
      <Post
        title={elem.title} 
        message={elem.message} 
        likesCount={elem.likesCount} 
        key={elem.id} 
        img={props.proffilePage.currentUser[0].img} 
        person={props.proffilePage.currentUser[0].person} 
      />
    );
  });

  let addPost = (formData) => { 
    props.addPost(formData);
  };

    return (
      <div className = {s.content}>
        <div>Новый пост</div>
        <div className="newPost">
          <PostForm postCurrentText={props.proffilePage.postCurrentText} addPost={addPost}/>
        </div>
        <div>Мои посты</div>
        {outPostData}
      </div>
    );
}

export default Posts;