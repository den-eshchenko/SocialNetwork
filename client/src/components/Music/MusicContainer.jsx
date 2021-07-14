import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMusicTC, addMusicTC, setTrackAC, setIsPlayingAC, setLikeTkackTC } from '../../redux/musicReduser';
import { Music } from './Music';

class MusicContainer extends React.Component {
  setTrack = (currentTrack, nextTrack, backTrack, playingTrack) => {
    this.props.setTrackAC(currentTrack, nextTrack, backTrack, playingTrack);
    this.props.setIsPlayingAC(true);
  }
  setLikeTkack = (idTrack) => {
    this.props.setLikeTkackTC(idTrack);
  }

  addTracks = () => {
    this.props.addMusicTC();
  }
  
  render (){
    return (
      <>
        {/* {this.props.music.isFetching ? <Preloader /> : <Music {...this.props} setTrack={this.setTrack} setIsPlaying={this.props.setIsPlayingAC} setLikeTkack={this.setLikeTkack} addTracks={this.addTracks}/>} */}
        <Music {...this.props} setTrack={this.setTrack} setIsPlaying={this.props.setIsPlayingAC} setLikeTkack={this.setLikeTkack} addTracks={this.addTracks}/>
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    music: state.music
  }
}

export default compose(
  connect(mapStateToProps, {getMusicTC, addMusicTC, setTrackAC, setIsPlayingAC, setLikeTkackTC})
)(MusicContainer);