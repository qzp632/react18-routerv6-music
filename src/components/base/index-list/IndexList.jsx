
import React, { Fragment } from 'react'
import Scroll from '../Scroll'

import './IndexList.scss'
import useFiexd from './use-fiexd'
import useShortcut from './use-shortcut'

function IndexList(props) {
    let { data, select } = props
    const { groupRef, onScroll, fiexdTitle, currentIndex, fiexdFlag, fiexdStyle } = useFiexd(props)
    const { shortcuList, scrollRefEl, onShortcutTouchStart, onShortcutTouchMove } = useShortcut(props, groupRef)

    return (
        <Fragment>
            <Scroll 
                className='index-list-wrapper'
                probeType={3}
                scroll={ onScroll }
                scrollRefEl= { scrollRefEl }
            >
                <ul ref={ groupRef }>
                    {
                        data.map((group) => 
                            <li key={ group.title } className="group" >
                                <h2 className='title'>{ group.title }</h2>
                                <ul>
                                    {
                                        group.list.map((item) => 
                                           <li key={ item.id } className="item" onClick={ () => {
                                                select(item);
                                           }}>
                                               <img className='avatar' src={ item.pic } alt=""/>
                                               <span className='name'>{ item.name }</span>
                                           </li>     
                                        ) 
                                    }
                                </ul>
                            </li>
                        )
                    }
                </ul>
                {
                    fiexdFlag ? 
                    <div className='fixed' style={ fiexdStyle }>
                        <div className='fixed-title'>{ fiexdTitle }</div>
                    </div> : null
                }
                
                <div 
                    className='shortcut'
                    onTouchStart={ onShortcutTouchStart }
                    onTouchMove = { onShortcutTouchMove }
                >
                    <ul>
                        {
                            shortcuList.map((item, index) => 
                                <li data-index={ index } key={ item } className={ currentIndex === index ? 'item current' : 'item'}>{ item }</li>                      
                            )
                        }
                    </ul>
                </div>
            </Scroll>
        </Fragment>
    )
}

export default IndexList