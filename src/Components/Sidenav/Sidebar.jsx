import React, {useState} from 'react'
import {
    Box, Flex, Center, chakra, Icon
} from '@chakra-ui/react';
import {MdDashboard} from 'react-icons/md';
import {FaUserFriends, FaChalkboardTeacher} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';

import MenuItem from './MenuItem';



function Sidebar({collapse, setCollapse, users, setUsers}) {


    return (
        <Flex 
            bg="#2d3748" 
            w={{
                base: collapse ? "0" : "300px", 
                sm: collapse ? "0" : "300px", 
                md: collapse ? "60px" : "300px", 
                lg: collapse ? "300px" : "60px"
            }}
            transition="all 0.5s" 
            h="100vh"
            flexDirection="column"
            justifyContent="space-between"
            color="white"
            overflow="hidden"
            // className="sidenav"
        >
            <Box>
                <MenuItem 
                    name="Dashboard"
                    icon={MdDashboard}
                    isChild={false}
                    link="/dashboard"
                    matchPath="/dashboard"
                />

                <span onClick={()=>{
                    if(window.innerWidth <= 768){
                        setUsers(!users);
                        setCollapse(false);
                    } else {
                        setUsers(!users);
                        if(!collapse){
                            setCollapse(!collapse);
                        }
                    }

                }}>
                    <MenuItem 
                        name="Users"
                        icon={FaUserFriends}
                        isChild={false}
                        childIcon={FaChalkboardTeacher}
                        hasChild
                    />
                </span>

                {
                    users && 
                    <MenuItem
                        name="Child of User"
                        icon={FaUserFriends}
                        isChild
                        childIcon={FaChalkboardTeacher}
                        link="/user/child-of-user"
                        matchPath="/user/child-of-user"
                    />
                }
                

                <MenuItem 
                    name="Teacher"
                    icon={FaChalkboardTeacher}
                    link="/teacher"
                    matchPath="/teacher"
                />
                
                
            </Box>
            

            <Flex 
                bg="#4a5568" cursor="pointer" 
                minHeight="50px"
                justifyContent="center"
                alignItems="center"
                onClick={()=>{
                    setUsers(false)
                    setCollapse(!collapse);
                }}
            >
                <Icon w="5" h="10" as={AiOutlineMenu}/>
            </Flex>

        </Flex>
    )
}

export default Sidebar
