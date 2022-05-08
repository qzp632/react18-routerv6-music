

import { NavLink } from 'react-router-dom'
// import MyLink from '../MyLink'
import './Tab.scss'

function Tab() {
    const tabs = [
        {
            name: '推荐',
            path: '/recommend'
        },
        {
            name: '歌手',
            path: '/singer'
        },
        {
            name: '排行',
            path: '/top-list'
        },
        {
            name: '搜索',
            path: '/search'
        }
    ]
    return (
        <div className="tab-wrapper">
            {
                tabs.map(tab => 
                    <NavLink className='tab-item' key={ tab.path } to={ tab.path }>
                        <span className='tab-link'>
                            { tab.name }
                        </span>
                    </NavLink>
                    // <MyLink className='tab-item' key={ tab.path } to={ tab.path }>
                    //     <span className='tab-link'>
                    //         { tab.name }
                    //     </span>
                    // </MyLink>
                )
            }
        </div>
    )
}

export default Tab