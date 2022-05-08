import { useRef } from 'react'
import useSlider from './use-slider'

import './slider.scss'

function Slider({ sliders }) {
    const rootRef = useRef(null)
    const { currentPageIndex } = useSlider(rootRef)
    // console.log(currentPageIndex);

    return (
        <div className='sliderWrapper' ref={ rootRef }>
            <div className='slider-group'>
                {
                    sliders.map( item => 
                        <div className='slider-page' key={ item.id }>
                            <a href={ item.link }>
                                <img src={ item.pic } alt=''/>
                            </a>
                        </div>
                    )
                }
            </div>

            <div className='dots-wrapper'>
                {
                    sliders.map( (item, index) => 
                        <span 
                            key={ item.id }
                            className={ currentPageIndex === index ? 'dot active' : 'dot' } 
                        >
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default Slider