import { useRef, useState, useEffect } from "react";
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)

export default function useSlider(wrapperRef) {
    const slider = useRef(null)
    const [currentPageIndex, setCurrentPageIndex] = useState(0)

    useEffect(() => {
        const sliderVal = slider.current = new BScroll(wrapperRef.current, {
            click: true,
            scrollX: true,
            scrollY: false,
            momentum: false,
            bounce: false,
            probeType: 2,
            slide: true
        })

        sliderVal.on('slideWillChange', page => {
            setCurrentPageIndex(page.pageX)
        })

        return () => {
            slider.current.destroy()
        }
    }, [wrapperRef])

    return {
        slider,
        currentPageIndex
    }
}