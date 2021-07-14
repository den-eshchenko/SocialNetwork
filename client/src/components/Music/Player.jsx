import React, { useEffect } from 'react';
import s from './Player.module.css';

function Player(props) {
  const audioPlayer = React.createRef();
  const volumeAudioPlayer = React.createRef();
  const progressAudio = React.createRef();
  const progressLoad = React.createRef();
  const currentImgVolume = React.createRef();

  let nextFileTrack, currentFileTrack, backFileTrack;

  useEffect(() => { // выполняется когда props.infoTrack.isPlaying или audioPlayer - изменятся как либо
    if (props.infoTrack.isPlaying) {
      audioPlayer.current.play();
      audioPlayer.current.parentNode.childNodes[1].children[1].classList.add(`${s.active_button_play}`);
    } else {
      audioPlayer.current.pause();
      audioPlayer.current.parentNode.childNodes[1].children[1].classList.remove(`${s.active_button_play}`);
    }
  }, [props.infoTrack.isPlaying, audioPlayer])


  const play = (e) => {
    // e.target.classList.toggle(`${s.active_button_play}`);
    audioPlayer.current.parentNode.childNodes[1].children[1].classList.add(`${s.active_button_play}`);
    if (props.infoTrack.isPlaying) {
      pause();
    } else {
      props.setIsPlaying(true);
      audioPlayer.current.play();
    }
  }
  const pause = () => {
    audioPlayer.current.parentNode.childNodes[1].children[1].classList.remove(`${s.active_button_play}`);
    props.setIsPlaying(false);
    audioPlayer.current.pause();
  }
  const stop = () => {
    props.setIsPlaying(false);
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;  
  }
  function volume() {
    audioPlayer.current.volume = volumeAudioPlayer.current.value / 100;
    if(volumeAudioPlayer.current.value < 1) {
      console.log(volumeAudioPlayer.current.value);
      volumeAudioPlayer.current.parentNode.classList.add(`${s.volume0}`);
    } else volumeAudioPlayer.current.parentNode.classList.remove(`${s.volume0}`);
  }

  function audioRewind(e) {
    let widthProgressBar = progressAudio.current.offsetWidth;
    let currentClickPosition = e.nativeEvent.offsetX;
    progressAudio.current.value = 100 * currentClickPosition / widthProgressBar;
    audioPlayer.current.currentTime = audioPlayer.current.duration * currentClickPosition / widthProgressBar;
  }

  function updateProgress() { // обновление полосы прогресса аудио
    for(let i = 0; i < audioPlayer.current.buffered.length; i++){ // иду по всем интервалам 
      let bufferedSection = audioPlayer.current.buffered.end(i); // возвращает интервал полностью загруженного участка файла в м.сек
      let percentLoadTrack = 100 * bufferedSection / audioPlayer.current.duration; 
      progressLoad.current.value = percentLoadTrack;
    }
    
    let durationAudio = audioPlayer.current.duration || 1; // длительность трека
    let currentTimeAudio = audioPlayer.current.currentTime || 0; // текущаяя позиция проигрывания
    progressAudio.current.parentNode.setAttribute("data-currenttime", Math.floor(currentTimeAudio / 60) + ': ' + Math.floor(currentTimeAudio % 60));
    progressAudio.current.value = 100 * currentTimeAudio / durationAudio;
    if(durationAudio === currentTimeAudio) { // если трек доиграл то стопаю все, в дальнейшем добавить переход на следующий трек
      props.setIsPlaying(false);
      stop();
      nextTrack();
    }
  }

  function nextTrack() {
    props.setIsPlaying(false);
    if (props.infoTrack.playingTrack < props.infoTrack.music.length - 1) {
      props.infoTrack.playingTrack++; // обновил текущий играющий трек
      backFileTrack = props.infoTrack.currentFileTrack;
      currentFileTrack = props.infoTrack.nextFileTrack;

      if (props.infoTrack.music[props.infoTrack.playingTrack + 1] === undefined) {
        nextFileTrack = props.infoTrack.music[props.infoTrack.music.length - 1].path;
      } else nextFileTrack = props.infoTrack.music[props.infoTrack.playingTrack + 1].path;

      props.setTrack(currentFileTrack, nextFileTrack, backFileTrack, props.infoTrack.playingTrack);
      props.setIsPlaying(true);
    } else {
      return;
    }
  }
  function backTrack() {
    props.setIsPlaying(false);
    if (props.infoTrack.playingTrack > 0) {
      props.infoTrack.playingTrack--; // обновил текущий играющий трек
      nextFileTrack = props.infoTrack.currentFileTrack;
      currentFileTrack = props.infoTrack.backFileTrack;

      if (props.infoTrack.music[props.infoTrack.playingTrack - 1] === undefined) {
        backFileTrack = props.infoTrack.music[0].path;
      } else backFileTrack = props.infoTrack.music[props.infoTrack.playingTrack - 1].path;

      props.setTrack(currentFileTrack, nextFileTrack, backFileTrack, props.infoTrack.playingTrack);
      props.setIsPlaying(true);
    } else {
      return;
    }
  }

  return (
    <div className={s.audioPlay}>

      <div 
        className={s.progressBlock} 
        data-duration={props.infoTrack.music[props.infoTrack.playingTrack].duration}
        data-currenttime="0:0">
        <progress
          id={s.progressAudio}
          ref={progressAudio}
          value="0" max="100"
          onClick={audioRewind}
        ></progress>
        <progress
          id={s.progressLoad}
          ref={progressLoad}
          value="0" max="100">
        </progress>
      </div>
      
      <div className={s.navButtons}>
        <div className={s.lineInfoAndButton}>
          <audio ref={audioPlayer} src={props.infoTrack.currentFileTrack} onTimeUpdate={updateProgress} preload="metadata"></audio>
          <div>
            <button id={s.backTrack} onClick={backTrack}></button>
            <button className={s.playAudio} onClick={play}></button>
            <button id={s.nextTrack} onClick={nextTrack}></button>
          </div>
          <div className={s.lineInfo}>
            <div><img src={props.infoTrack.music[props.infoTrack.playingTrack].img} alt="logo"/></div>
            <div>
              <div>{props.infoTrack.music[props.infoTrack.playingTrack].title}</div>
              <div>{props.infoTrack.music[props.infoTrack.playingTrack].autor}</div>
            </div>
          </div>
        </div>
        <div className={s.img_volume_container} data-duration={props.infoTrack.music[props.infoTrack.playingTrack].duration}>
          <div className={s.imgVolume} ref={currentImgVolume}>
            <input className={s.volumeAudio} onChange={volume} ref={volumeAudioPlayer} type="range" min="0" max="100" defaultValue="100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player;