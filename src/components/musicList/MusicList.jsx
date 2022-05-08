import { useEffect, useMemo, useRef, useState } from 'react'
import './MusicList.scss'
import TransFormEl from '../base/TransFormEl'
import Scroll from '../base/Scroll'
import SongList from '../base/songList/SongList'
import LoadingPage from '../base/LoadingPage'

function MusicList(props) {
    let { songs, pic, title, loading } = props
    const RESERVED_HEIGHT = 40
    const bgImage = useRef(null)
    const maxTransLateY = useRef(0)
    const [path, setPath] = useState('')
    const [scrollY, setScrollY] = useState(0)
    const [imageHeight, setImageHeight] = useState(0)

    const noResult = useMemo(() => {
        if (!loading && !songs.length) {
            return "抱歉，没有找到可播放的歌曲"
        }
    }, [songs, loading])

    const bgImageStyle = useMemo(() => {
        let zIndex = 0
        let paddingTop = '70%'
        let height = 0
        let translateZ = 0
        if (scrollY > maxTransLateY.current) {
            zIndex = 10
            paddingTop = 0
            height = `${ RESERVED_HEIGHT }px`
            translateZ = 1
        }
        let scale = 1
        if (scrollY < 0) {
            scale = 1 + Math.abs(scrollY / imageHeight )
        }
        return {
            zIndex,
            paddingTop,
            height,
            backgroundImage: `url(${ pic })`,
            transform: `scale(${scale})translateZ(${translateZ}px)`
        }
    }, [pic, scrollY, imageHeight])

    const filterStyle = useMemo(() => {
        let blur = 0
        let imageHeightVal = imageHeight || 0
        if (scrollY >= 0 && imageHeightVal !== 0) {
            blur = Math.min(imageHeightVal / imageHeightVal, scrollY / imageHeightVal)* 20
        }

        return Math.floor(blur)

        // return {
        //     'backdropFilter': `blur(${blur}px)` ,
        // }
    },[scrollY, imageHeight])

    useEffect(() => {
        const imageHeightVal = bgImage.current.clientHeight
        setImageHeight(imageHeightVal)
        maxTransLateY.current = imageHeightVal - RESERVED_HEIGHT
    }, [])

    const onScroll = (pos) => {
        setScrollY(-pos.y)
    }
    
    return (
        <TransFormEl pathVal = { path }>
            <div className='music-list-wrapper'>
                <div className='back' onClick={() => setPath(-1)} >
                    <i className='icon-back'></i>
                </div>
                <h1 className='title'>{ title }</h1>
                <div className='bg-image' style={ bgImageStyle } ref={ bgImage }>
                    {
                        scrollY >= maxTransLateY.current ? null :
                        <div className='play-btn-wrapper'>
                            {
                                songs.length ?
                                <div className='play-btn'>
                                    <i className='icon-play'></i>
                                    <span className='text'>随机播放全部</span>
                                </div>: null
                            }
                        </div>
                    }

                    <div className={ `filter filter${filterStyle}` }></div>
                </div>

                <LoadingPage className="listWrapper" style ={ {top: imageHeight } } loading={ props.loading } noResult={ noResult }>
                    <Scroll 
                        className='listWrapper' 
                        probeType={3}
                        scroll = { onScroll }
                    >
                        <div className='song-list-wrapper'>
                            <SongList songs={ songs }></SongList>
                        </div>
                    </Scroll>
                </LoadingPage>
            </div>
        </TransFormEl>
    )
}

export default MusicList