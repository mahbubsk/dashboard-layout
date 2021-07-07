import React, {useState} from 'react'
import {
    Box, Flex, Center, chakra
} from '@chakra-ui/react';
import {MdDashboard} from 'react-icons/md';
import {FaUserFriends, FaChalkboardTeacher} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';

import MenuItem from './MenuItem';



function Sidebar() {

    const [collapse, setCollapse] = useState(true);
    const [users, setUsers] = useState(false);


    return (
        <Flex 
            bg="#2d3748" 
            w="300px" 
            h="100vh"
            flexDirection="column"
            justifyContent="space-between"
            color="white"
        >
            <Box>
                <MenuItem 
                    name="Dashboard"
                    icon={MdDashboard}
                    isChild={false}
                    link="/dashboard"
                />

                <span onClick={()=>{
                    setUsers(!users)
                }}>
                    <MenuItem 
                        name="Users"
                        icon={FaUserFriends}
                        isChild={false}
                        childIcon={FaChalkboardTeacher}
                        link="/users"
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
                    />
                }
                

                <MenuItem 
                    name="Teacher"
                    icon={FaChalkboardTeacher}
                    link="/teacher"
                />
                
                
            </Box>
            

            <Box bg="#4a5568" p="2" cursor="pointer">
                <Center>
                    <AiOutlineMenu/>
                </Center>
            </Box>

        </Flex>
    )
}

export default Sidebar
