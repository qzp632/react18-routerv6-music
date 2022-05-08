import { useRef } from 'react'
import useScroll from './use-scroll'

function Scroll({ children, className="", scroll=null, scrollRefEl=null, style=null, ...props }) {
    const attrs = {
        click: true,
        probeType: 0,
        ...props
    }

    const rootRef = useRef(null)
    const scrollEl = useScroll(rootRef, attrs, scroll)
    scrollRefEl && scrollRefEl(scrollEl)
    
    return (
        <div ref={ rootRef } className={ className } style={ style }>
            { children }
        </div>
    )
}

export default Scroll