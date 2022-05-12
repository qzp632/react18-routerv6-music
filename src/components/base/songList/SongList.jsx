import { Fragment } from "react";
import './SongList.scss'

function SongList(props) {
    const { songs, select } = props
    const getDesc = (song) => {
        return `${ song.singer }.${ song.album }`
    }

    const selectItem = (song, index) => {
        select({ song, index })
    }

    return (
        <Fragment>
            <ul className="song-list">
                {
                    songs.map((song, index) => 
                        <li key={ song.id } className="item" onClick={ (song) => selectItem(song, index) }>
                            <div className="content">
                                <h2 className="name">{ song.name }</h2>
                                <p className="desc">{ getDesc(song) }</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default SongList