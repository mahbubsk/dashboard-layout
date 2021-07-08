import React, {useState} from 'react';
import './App.css';
import {
    Flex, Box
} from '@chakra-ui/react';
import {
    Switch,
    BrowserRouter,
    Route
  } from "react-router-dom";
import Sidebar from './Components/Sidenav/Sidebar';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Users from './Components/Users/Users';
import Dashboard from './Components/Dashboard/Dashboard';



function App() {
    const [collapse, setCollapse] = useState(true);
    const [users, setUsers] = useState(false);


    return (
        <BrowserRouter>
            <Flex>
                <Sidebar collapse={collapse} users={users} setCollapse={setCollapse} setUsers={setUsers}/>
                <Box w="100%">
                    <Header collapse={collapse} users={users} setCollapse={setCollapse} setUsers={setUsers}/>
                        <Switch>
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route path="/users/child-of-user" component={Users} />
                        </Switch>
                </Box>
            </Flex>
        </BrowserRouter>

    )
}

export default App;