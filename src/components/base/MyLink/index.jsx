
import { Fragment } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function MyLink({ children, to, className="", ...props }) {

    let resolved = useResolvedPath(to)
    let active = useMatch({ path: resolved.pathname, end: true})

    return (
        <Fragment>
            <Link className={ active ? `${className} router-link-acitve` : className } to={ to } {...props}>
                { children }
            </Link>
        </Fragment>
    )
}

export default MyLink