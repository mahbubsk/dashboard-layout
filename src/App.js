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
import Header from './Components/Header/Header';
import Users from './Components/Users/Users';
import Dashboard from './Components/Dashboard/Dashboard';



function App() {
    const [collapse, setCollapse] = useState(true);
    


    return (
        <BrowserRouter>
            <Flex>
                <Sidebar 
                    collapse={collapse} 
                    setCollapse={setCollapse} 
                />
                <Box w="100%">
                    <Header collapse={collapse} setCollapse={setCollapse}/>
                    <Box 
                        onClick={()=>{
                            if(window.innerWidth < 768 && !collapse){
                                setCollapse(true);
                            }
                             
                        }}
                    >
                        <Switch>
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route path="/users/child-of-user" component={Users} />
                        </Switch>
                    </Box>
                </Box>
            </Flex>
        </BrowserRouter>

    )
}

export default App;