
import { Fragment } from 'react'

function ImgLazy({ ...props }) {
    return (
        <Fragment>
            <img {...props} alt="" />
        </Fragment>
    )
}

export default ImgLazy