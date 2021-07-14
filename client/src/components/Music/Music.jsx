import React, { memo } from 'react';
import s from './Music.module.css';
import Player from './Player';
import preloader from '../../assets/images/loading.gif'
import 'intersection-observer'; // optional polyfill
import Observer from '@researchgate/react-intersection-observer';
// import LoadebleImage from '../LoadebleImage/LoadebleImage';
import { useCallback } from 'react';
// import classNames from 'classnames';
import { Other } from './Other';

// const gen = () => {
//   let key = 0;  
//   return () => {
//       return key++;
//   }
// }
// const keyGen = gen();

function MusicInner(props) {
  let music = props.music.music;
  let currentTrack, nextTrack, backTrack;
  const handleIntersection = (event, unobserve) => {
    if (event.isIntersecting) {
        props.addTracks();
    }
  }

  const playTrackFromPlaylist = (e) => {
    e.preventDefault();
    let playingTrack = +e.target.parentNode.getAttribute("data-index");
    if(playingTrack === props.music.playingTrack && props.music.isPlaying){ // проверка, играет трек или нет
      props.setIsPlaying(false);
    } else {
      if(music[playingTrack-1] === undefined){
        backTrack = music[0].path;
      } else backTrack = music[playingTrack-1].path;
      
      if(music[playingTrack+1] === undefined){
        nextTrack = music[music.length-1].path;
      } else nextTrack = music[playingTrack+1].path;
      
      currentTrack = e.target.parentNode.href;
      
      props.setTrack(currentTrack, nextTrack, backTrack, playingTrack);
    }
  }

  const Tracks = memo(({ t, index, ...props }) => {
    const setLikeTkack = useCallback(() => {
      props.setLikeTkack(t.id);
    }, [t.id, props]);

    return (
      <div className={s.track}>
        <div className={s.navTrack}>
          <a href={t.path} data-index={index} className={props.playingTrack === index && props.isPlaying ? s.active: s.noActive}>
            <img src={t.img} alt="logoTrack" onClick={playTrackFromPlaylist}/>
            {/* <LoadebleImage src={t.img} alt="logoTrack" onClick={playTrackFromPlaylist}/> */}
            <span className={s.control} onClick={playTrackFromPlaylist}></span>
          </a>
        </div>
        <div className={s.titleTrack}>
          <div>{t.title}</div>
          <div>{t.autor}</div>
        </div>
        <div className={s.other}>
          <Other id={t.id} duration={music[index].duration} setLikeTkack={setLikeTkack} like={t.like}/>
          {/* <span className={t.like ? s.heartLike : s.heartNotLike} data-track-id={t.id} onClick={setLikeTkack}></span>
          <span>{music[index].duration}</span> */}
        </div>
      </div>
    )
  });

  return (
      <div className={s.music}>
        <div id="scroll_track">
          {music !== null && music.map((t, index) => <Tracks t={t} index={index} key={index} {...props.music} setLikeTkack={props.setLikeTkack} />)}
        </div>
        <Observer onChange={handleIntersection}>
          <div className={s.bottom_preloader}>
            { props.music.isFetching &&
              <img src={preloader} alt="bottom_preloader" />
            }
          </div>
        </Observer>
        <div className={s.player}><Player infoTrack={props.music} setTrack={props.setTrack} setIsPlaying={props.setIsPlaying} /></div>
      </div>
  );
}

export const Music = memo(MusicInner);