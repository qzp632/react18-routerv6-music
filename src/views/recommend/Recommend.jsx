import React, { useEffect, useMemo, useState } from 'react'

import './Recommend.scss'

import Slider from '../../components/base/Slider'
import Scroll from '../../components/base/Scroll'
import { getRecommend } from '../../service/recommend'
import LoadingPage from '../../components/base/LoadingPage'

function Recommend() {
    const [ sliders, setSliders ] = useState([])
    const [ albums, setAlbums ] = useState([])


    useEffect(() => {
        _getRecommend()
    }, [])

    const _getRecommend = async () => {
        const result = await getRecommend()
        setSliders(result.sliders)
        setAlbums(result.albums)
    }

    const loading = useMemo(() => {
        return (!sliders.length && !albums.length)
    },[sliders, albums])

    const goDetail = () => {
        console.log('1111');
    }

    return (
        <LoadingPage loading={ loading }>
            <Scroll className="recommend-content">
                <div>
                    <div className='slider-wrapper'>
                        <div className='slider-content'>
                            {
                                sliders.length ? <Slider sliders={ sliders }/> : null
                            }
                        </div>
                    </div>
                    <div className='recommend-list'>
                        <div className='list-title'>热门歌单推荐</div>
                        <ul>
                            {
                                albums.map((item) => 
                                    <li className='item' key={ item.id } onClick={ ()=> goDetail()}>
                                        <div className='icon'>
                                            <img className='lazy-img' width='60' height='60' src={ item.pic } alt=''/>
                                        </div>
                                        <div className='text'>
                                            <h2 className='name'>{ item.username }</h2>
                                            <p className='title'>{ item.title }</p>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </Scroll>
        </LoadingPage>
    )
}

export default Recommend