// import React from 'react';
import preloader from '../../../assets/images/loading.gif';
import s from './Preloader.module.css';

function Preloader(props){
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;