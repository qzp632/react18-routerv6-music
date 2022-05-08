import { get } from './base'

export function getSingerList() {
    return get('/v2/api/getSingerList')
}

export function getSingerDetail(singer) {
    return get('v2/api/getSingerDetail',{
        mid: singer.mid
    })
}