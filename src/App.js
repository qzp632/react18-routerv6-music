// import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Tab from './components/tab/Tab';
import Router from './router'
import Player from './components/player/Player'


// import Button from '@mui/material/Button';
function App() {
    return (
        <div>
            {/* <Provider store={ store }> */}
                <Header></Header>
                {/* <Button variant="contained">你好，世界</Button> */}
                <Tab></Tab>
                <Router></Router> 
                <Player></Player>
            {/* </Provider> */}
        </div>
    )
}

export default App;
