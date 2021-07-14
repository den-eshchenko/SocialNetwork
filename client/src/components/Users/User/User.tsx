import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';
import male from '../../../assets/images/male.jpg';
import female from '../../../assets/images/female.jpg';
import { compose } from 'redux';
import { withLogoPhoto } from '../../HOC/withLogoPhoto';
import { UsersType } from '../../../types/types';

type PropsType = {
    u: UsersType
    isDisabled: Array<number>
    followUnfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({u, ...props}) => {
    return (
        <>
            <div className={s.container_user} key={u.id}>
                <div className={s.line_container_user}>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <div className={s.user_logo}>
                                <img src={u.img || (u.person === "male" && male) || (u.person === "female" && female) || ""} alt="logo" /> 
                                <div>{u.fullName}</div>
                            </div>
                        </NavLink>
                    </div>
                    <div className={s.content_message}>
                        <div className={s.city_country}>
                            <div>Статус: {u.message}</div>
                            <div>Город: {u.location.city}</div> 
                            <div>Страна: {u.location.country}</div>
                        </div>
                    </div>
                    <div className={s.btn_follow_unfollow}>
                        {u.follower ?
                            <button className={s.follow_btn} disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                                props.followUnfollow(u.id);
                            }}>Подписаться</button> :
                            <button className={s.unfollow_btn} disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                                props.followUnfollow(u.id);
                            }}>Отписаться</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default compose(withLogoPhoto)(User);