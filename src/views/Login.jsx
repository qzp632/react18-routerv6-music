import { Link } from "react-router-dom";
function Login(props) {
    return (<div>
        Login
            <Link to={props.pathname}>登陆</Link>
        </div>
    )
}

export default Login