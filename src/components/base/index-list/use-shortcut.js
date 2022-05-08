import { useMemo, useRef } from "react";

export default function useShortcut(props, groupRef) {
    let { data } = props
    const ANCHOR_HEIGHT = 18

    const scrollRef = useRef(null)
    const onchorIndex = useRef(0)
    const y1 = useRef(0)

    const shortcuList = useMemo(() => {
        return data.map(group => group.title)
    },[data])

    const onShortcutTouchStart = (e) => {
        e.stopPropagation()
        onchorIndex.current= parseInt(e.target.dataset.index)
        y1.current = e.touches[0].pageY
        scrollTo(onchorIndex.current)
    }

    const onShortcutTouchMove = (e) => {
        e.stopPropagation()
        const y2 = e.touches[0].pageY
        const delta = (y2 - y1.current) / ANCHOR_HEIGHT | 0
        scrollTo(onchorIndex.current + delta)
    }

    const scrollTo = (index) => {
        if (isNaN(index)) {
            return
        }
        index = Math.max(0, Math.min(shortcuList.length-1, index))
        const targetEl = groupRef.current.children[index]
        const scroll = scrollRef.current
        scroll.scrollToElement(targetEl, 0)
    }

    const scrollRefEl = (el) => {
        scrollRef.current = el.current
    }

    return {
        scrollRefEl,
        shortcuList,
        onShortcutTouchStart,
        onShortcutTouchMove
    }
}