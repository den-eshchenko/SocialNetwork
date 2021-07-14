import s from './Post.module.css';
import logoMale from '../../../../assets/images/male.jpg';
import logoFemale from '../../../../assets/images/female.jpg';

function Post(props) {
    return (
      <div className = {s.post_content}>
        <div className={s.title_post}>
        <img 
          src={ (props.img === null && props.person === "female" ? logoFemale : props.img) || 
                   (props.img === null && props.person === "male" ? logoMale : props.img) } 
          alt="logoPost"
        />
        <div>{props.title}</div>
        </div>
        <div>{props.message}</div>
        <div className={s.post_like}>
          <div className={s.heart_like}></div>
          <div className={s.likes_count}>{props.likesCount}</div>
        </div>
      </div>
    );
}

export default Post;