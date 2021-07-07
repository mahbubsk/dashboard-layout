import React from 'react';
import './App.css';
import {
    Flex, Box
} from '@chakra-ui/react';
import {
    Switch,
    BrowserRouter,
    Route,
    Link
  } from "react-router-dom";
import Sidebar from './Components/Sidenav/Sidebar';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Users from './Components/Users/Users';
import Dashboard from './Components/Dashboard/Dashboard';



function App() {
    return (
        <BrowserRouter>
            <Flex>
                <Sidebar/>
                <Box>
                    <Header/>
                    
                        <Switch>
                            <Route exact path="/dashboard">
                                <Dashboard/>
                            </Route>
                            <Route path="/users">
                                <Users/>
                            </Route>
                        </Switch>
                </Box>
            </Flex>
        </BrowserRouter>

    )
}

export default App;