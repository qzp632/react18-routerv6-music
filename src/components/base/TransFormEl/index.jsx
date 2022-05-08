import { useEffect, useState } from 'react'
import './TransFormEl.scss'

function TransFormEl({ children, ...props }) {
    const { pathVal } = {...props}
    const [isTranstion, setIsTranstion] = useState(false)
    let is1 = {
        transform: 'translateX(0)'
    }
    let is2 = {
        transform: 'translateX(100%)'
    }
    useEffect(() => {
        setIsTranstion(true)
    }, [])

    useEffect(() => {
        if (pathVal !== 'undefined' && pathVal !== '' ) {
            setIsTranstion(false)
            setTimeout(() => {
                window.history.go(getPathVal(pathVal))
            }, 200)
        }
    },[pathVal])

    const getPathVal = (val) => {
        if (val.toString().indexOf('/') < 0) {
            return val
        }
    }

    return (
        <div className="TransFormElWrapper" style={ isTranstion ? is1 : is2 }>
            { children }
        </div>
    )
}

export default TransFormEl