import { get } from './base'

export function getRecommend() {
    return get('/v2/api/getRecommend')
}