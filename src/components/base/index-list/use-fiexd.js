import { useRef, useEffect, useState, useMemo } from "react";

export default function useFiexd(props) {
    const TITLE_HEIGHT = 30
    const groupRef = useRef(null)
    const listHeights = useRef([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fiexdTitle, setFiexdTitle] = useState('')
    const [fiexdFlag, setFiexdFlag ] = useState(true)
    const [diffVal, setDiffVal] = useState(null)
    
    useEffect(() => {
       calculate()
    },[props])

     useEffect(() => {
        const currentGroup = props.data[currentIndex]
        setFiexdTitle(currentGroup ? currentGroup.title : '')
     },[props, currentIndex])


    const calculate = () => {
        const list = groupRef.current.children
        const listHeightVal = listHeights.current
        let height = 0

        listHeightVal.length = 0
        listHeightVal.push(height)

        for(let i = 0; i < list.length; i++) {
            height += list[i].clientHeight
            listHeightVal.push(height)
        }
    }

    const getFiexdStyle = (distance) => {
        const diff = (distance > 0 && distance < TITLE_HEIGHT) ? distance - TITLE_HEIGHT : 0
        setDiffVal(diff)
    }

    const fiexdStyle = useMemo(() => {
        return {
            transform: `translate3d(0, ${ diffVal }px, 0)`
        }
    }, [diffVal])

    const setScrollY = (scrollY) => {
        if (scrollY < 0 ) {
            setFiexdFlag(false)
        } else {
            setFiexdFlag(true)
        }
        const listHeightVal = listHeights.current
        for (let i = 0; i < listHeightVal.length - 1; i++) {
            const heightTop = listHeightVal[i]
            const heightBottom = listHeightVal[i + 1]
            if (scrollY >= heightTop && scrollY <= heightBottom) {
                setCurrentIndex(i)
                getFiexdStyle(heightBottom-scrollY)
            }
        }
    }

    const onScroll = (pos) => {
        setScrollY(-pos.y)
    }

    return {
        groupRef,
        onScroll,
        fiexdTitle,
        currentIndex,
        fiexdFlag,
        fiexdStyle
    }
}