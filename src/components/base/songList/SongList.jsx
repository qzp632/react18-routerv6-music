import { Fragment } from "react";
import './SongList.scss'

function SongList({ songs }) {

    const getDesc = (song) => {
        return `${ song.singer }.${ song.album }`
    }

    return (
        <Fragment>
            <ul className="song-list">
                {
                    songs.map((song, index) => 
                        <li key={ song.id } className="item">
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