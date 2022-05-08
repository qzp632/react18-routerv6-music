import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import MusicList from '../../components/musicList/MusicList';
import { getSingerDetail } from '../../service/singer';
import { processSongs } from '../../service/song';

import './SingerDetail.scss'

function SingerDetail(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const singer = useOutletContext()
    const { id } = useParams()
    const [ songs, setSongs ] = useState({})
    const [ loading, setLoading ] = useState(true)

    const commputedSinger = useMemo(() => {
        let ret = null
        if (singer) {
            ret = singer
        } else {
            const cachedSinger = JSON.parse(sessionStorage.getItem('__singer__'))
            if (cachedSinger && cachedSinger.mid === id) {
                ret = cachedSinger
            }
        }
        return ret
    },[id, singer])

    const _getSingerDetail = useCallback(async () => {
        const result = await getSingerDetail(commputedSinger)
        setSongs(await processSongs(result.songs))
        setLoading(false)
    },[commputedSinger])

    useEffect(() => {
        if (!commputedSinger) {
            const path = location.pathname.split('/').filter((item) => !!item)[0]
            navigate(`/${path}`)
            return
        }
        _getSingerDetail()
    }, [commputedSinger, location, navigate, _getSingerDetail])

    const title = useMemo(() => {
        return commputedSinger && commputedSinger.name
    }, [commputedSinger])

    const pic = useMemo(() => {
        return commputedSinger && commputedSinger.pic
    }, [commputedSinger])
    
    return (
        <div className='singer-detail-wrapper'>
            <MusicList songs={ songs } title={ title } pic={ pic } loading={ loading }></MusicList>
        </div>
    )
}

export default SingerDetail



