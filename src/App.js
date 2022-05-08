import Header from './components/header/Header';
import Tab from './components/tab/Tab';
import Router from './router'
// import Button from '@mui/material/Button';
function App() {
    return (
        <div>
            <Header></Header>
            {/* <Button variant="contained">你好，世界</Button> */}
            <Tab></Tab>
            <Router></Router> 
        </div>
    )
}

export default App;
