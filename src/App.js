import React from 'react';
import './App.css';
import {
    Flex
} from '@chakra-ui/react';
import Sidebar from './Components/Sidenav/Sidebar';
import Main from './Components/Main/Main';


function App() {
    return (
        <Flex>
            <Sidebar/>
            <Main/>
        </Flex>
    )
}

export default App;