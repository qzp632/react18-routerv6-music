import { useRef, useEffect } from "react";
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, attrs, scrollEvent) {
    const scroll = useRef(null)
    const options = useRef(attrs)
    const onScroll = useRef(scrollEvent)

    useEffect(() => {
        const scrollVal = scroll.current = new BScroll(wrapperRef.current, {
            observeDOM: true,
            ...options.current
        })

        if (options.current.probeType > 0) {
            scrollVal.on('scroll', (pos)=> {
                onScroll.current(pos)
            })
        }
        
    },[wrapperRef])

    return scroll
}