import { createSlice } from "@reduxjs/toolkit";
import { PLAY_MODE } from '../assets/js/constant'
import { shuffle } from "../assets/js/util";

const initialState = {
    playing: false,
    sequenceList: [],
    playlist: [],
    playMode: PLAY_MODE.sequence,
    currentIndex: 0,
    fullScreen: false
}

const setSequenceList = (state, list) => {
    state.sequenceList = list
}

const setPlayMode = (state, mode) => {
    state.playMode = mode
} 

const setPlayingState = (state, playing) => {
    state.playing = playing
}

const getFullScreen = (state, fullScreen) => {
    state.fullScreen = fullScreen
}

const setPlaylist = (state, list) => {
    state.playlist = list
}

const setCurrentIndex = (state, index) => {
    state.currentIndex = index
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        selectPlay(state,{ payload }) {
            const { songs, index } = payload
            setPlayMode(state, PLAY_MODE.sequence)
            setSequenceList(state, songs)
            setPlayingState(state, true)
            getFullScreen(state, true)
            setPlaylist(state, songs)
            setCurrentIndex(state, index)
        },
        randmPlay(state, { payload }) {
            const { songs } = payload
            setPlayMode(state, PLAY_MODE.random)
            setSequenceList(state, songs)
            setPlayingState(state, true)
            getFullScreen(state, true)
            setPlaylist(state, shuffle(songs))
            setCurrentIndex(state, 0)
        },
        setFullScreen(state, { payload }) {
            const { fullScreen } = payload
            console.log('this', this);
            getFullScreen(state, fullScreen)
        }
    }
})

export const { selectPlay, randmPlay, setFullScreen } = commonSlice.actions

export default commonSlice.reducer