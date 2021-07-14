import { musicAPI } from "../api";
import { MusicType } from "../types/types";

const SET_MUSIC = "SET_MUSIC";
const ADD_MUSIC = "ADD_MUSIC";
const SET_TRACK = "SET_TRACK";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_PLAYING = "SET_IS_PLAYING";
const SET_LIKE_TRACK = "SET_LIKE_TRACK";

let defaultStateMusicReduser = {
    music: null as Array<MusicType> | null,
    currentFileTrack: null as string | null,
    backFileTrack: null as string | null,
    nextFileTrack: null as string | null,
    isPlaying: false as boolean,
    volume: 100 as number,
    playingTrack: null as number | null,
    isFetching: false as boolean
}

type DefaultStateMusicReduserType = typeof defaultStateMusicReduser

const musicReduser = (state = defaultStateMusicReduser, action: any): DefaultStateMusicReduserType => {
    switch (action.type) {
        case SET_MUSIC:
            return {
                ...state, music: JSON.parse(JSON.stringify(action.music))
            }
        case ADD_MUSIC:
            return {
                ...state, music: [...state.music as Array<MusicType>, ...action.music]
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_IS_PLAYING:
               return {
                ...state, isPlaying: action.isPlaying
            }
        case SET_TRACK:
            return {
                ...state, 
                currentFileTrack: action.currentTrack,
                nextFileTrack: action.nextTrack,
                backFileTrack: action.backTrack,
                playingTrack: action.playingTrack
            }
        case SET_LIKE_TRACK:
                let newLikeTrack = state.music !== null ? {...state.music[action.idTkack-1], like: !state.music[action.idTkack-1].like} : null;
                return {
                    ...state, 
                    music: state.music !== null ? state.music.map( (e: any) => {
                        if(e.id !== action.idTkack){
                            return e;
                        }
                        return newLikeTrack;
                    }) : null
                }
        default:
            return state;
    }
}


export type SetMusicACType = { type: typeof SET_MUSIC, music: Array<MusicType> | null };
export const setMusicAC = (music: Array<MusicType> | null): SetMusicACType => { return { type: SET_MUSIC, music } };

export type AddMusicACType = { type: typeof ADD_MUSIC, music: Array<MusicType> | null };
export const addMusicAC = (music: Array<MusicType> | null): AddMusicACType => { return { type: ADD_MUSIC, music } };

export type SetIsFetchingACType = { type: typeof SET_IS_FETCHING, isFetching: boolean };
export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingACType => { return { type: SET_IS_FETCHING, isFetching } };

export type SetIsPlayingACType = { type: typeof SET_IS_PLAYING, isPlaying: boolean };
export const setIsPlayingAC = (isPlaying: boolean): SetIsPlayingACType => { return { type: SET_IS_PLAYING, isPlaying } };

export type SetTrackACType = { type: typeof SET_TRACK, currentTrack: string | null, nextTrack: string | null, backTrack: string | null, playingTrack: number | null };
export const setTrackAC = (currentTrack: string | null, nextTrack: string | null, backTrack: string | null, playingTrack: number | null): SetTrackACType => { return { type: SET_TRACK, currentTrack, nextTrack, backTrack, playingTrack } };

export type SetLikeTkackACType = { type: typeof SET_LIKE_TRACK, idTkack: number };
export const setLikeTkackAC = (idTkack: number): SetLikeTkackACType => { return { type: SET_LIKE_TRACK, idTkack } };

export const getMusicTC = () => {
    return async (dispatch: any) => {
        let response = await musicAPI.getMusic();
        dispatch(setMusicAC(response.items));
        dispatch(setTrackAC(response.items[0].path, response.items[1].path, response.items[0].path, 0));
    }
}
export const addMusicTC = () => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingAC(true));
        let response = await musicAPI.getMusic();
        dispatch(addMusicAC(response.items));
        dispatch(setIsFetchingAC(false));
    }
}
export const setLikeTkackTC = (idTkack: number) => {
    return async (dispatch: any) => {
        let response = await musicAPI.setLikeTkack(idTkack);
        if(response.status === 1) {
            dispatch(setLikeTkackAC(idTkack));
        }
    }
}

export default musicReduser;
