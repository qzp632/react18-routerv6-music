import './Player.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useEffect, useMemo, useRef } from 'react';
import { setFullScreen } from '../../redux/commonSlice';
// import { useEffect } from 'react';
// import { currentSong } from '../../redux/commonSlice';

function Player() {
    const { playlist, currentIndex, fullScreen } = useSelector((state) => state.commonSlice)

    const dispatch = useDispatch()

    const audioRef = useRef(null)

    const currentSong = useMemo(() => {
        let newSong = playlist[currentIndex] || {}
        return newSong
    },[playlist, currentIndex])


    useEffect(() => {
        if (!currentSong.id || !currentSong.url) {
            return
        }
        const audioEl = audioRef.current
        audioEl.src = currentSong.url
        audioEl.play()
    },[currentSong])

    const goBack = () => {
        dispatch(setFullScreen(false))
    }
   


    // const dispatch = useDispatch()
    


    return (
        <Fragment>
            {
                playlist.length ? 
                <div className="player-wrapper">
                    {
                        fullScreen ?
                        <div className="normal-player">
                            <div className="background">
                                <img src={ currentSong.pic } alt=""/>
                            </div>
                            <div className="top">
                                <div className="back" onClick={ goBack }>
                                    <i className="icon-back"></i>
                                </div>
                                <h1 className="playertitle">{ currentSong.name } </h1>
                                <h2 className='subtitle'>{ currentSong.singer } </h2>
                            </div>
                        </div> : null
                    }

                    <audio ref={ audioRef }></audio>
                </div> : null
            }
        </Fragment>
    )
}

export default Player