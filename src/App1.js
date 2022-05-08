import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Router from './router'

function App() {
  
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const ref = useRef(pathname)
  useEffect(() => {
    ref.current = pathname
  })

  return (
    <div className='App'>
      <Link to="/">访问Index页面</Link>
      <Link to="/about">访问about页面</Link>
      <button onClick={() => {
        localStorage.removeItem('acd')
        navigate("/")
      }}>退出</button>
      <Router pathname={ ref.current  }></Router>
    </div>
  )
}

export default App;
