import React, {useState} from 'react'
import {
    Box, Flex, chakra, Icon
} from '@chakra-ui/react';
import { Scrollbars } from 'react-custom-scrollbars';

import {MdDashboard} from 'react-icons/md';
import {FaUserFriends, FaChalkboardTeacher , FaRegMoneyBillAlt} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';

import MenuItem from './MenuItem';
import Tooltip from './Tooltip';


function Sidebar({collapse, setCollapse}) {
    const [rotate, setRotate] = useState(false);
    const [users, setUsers] = useState(false);
    const [teachers, setTeachers] = useState(false);
    const [navItem04, setNavItem04] = useState(false);



    const usersChildArray = [
        {childName: "Child of Users", matchPath:"/user/child-of-user", link: "/user/child-of-user"},
        {childName: "Salary", matchPath: "/users/salary", link: "/user/salary"}
    ]

    const teachersChildArray = [
        {childName: "Child of teacher", matchPath:"/user/child-of-user", link: "/user/child-of-user"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"}
    ]

    const navItem04ChildArray = [
        {childName: "Child of teacher", matchPath:"/user/child-of-user", link: "/user/child-of-user"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"},
        {childName: "Salary of teacher", matchPath: "/users/salary", link: "/user/salary"}
    ]



    return (
       
        <Flex 
            bg="#2d3748" 
            w={{
                base: collapse ? "0" : "70%", 
                sm: collapse ? "0" : "70%", 
                md: collapse ? "60px" : "300px", 
                lg: collapse ? "300px" : "60px"
            }}
            transition="all 0.5s" h="100vh"
            flexDirection="column"
            justifyContent="space-between"
            position={{base: "fixed", sm: "fixed", md: "relative", lg: "relative"}}
            color="white" zIndex="99" top="0" left="0">
             {/* <Scrollbars 
                autoHide
                autoHeight={1000}
                renderThumbVertical={props => (<div style={{ background: '#4a5568', borderRadius: '6px' }} />)}
                > */}
                <Box overflowX="hidden" className="sidenav-wrapper">
                    <MenuItem 
                        name="Dashboard"
                        icon={MdDashboard}
                        isChild={false}
                        link="/dashboard"
                        matchPath="/dashboard"
                    /> 

                    <Box className="sidenav-item">
                        <chakra.span
                            onClick={()=>{
                                if(window.innerWidth <= 768){
                                    setUsers(!users);
                                    setRotate(!rotate);
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
                                menuState={users}
                                setUsers={setUsers}
                                collapse={collapse}
                                childArray={usersChildArray}
                                menuNum={2}
                            />
                        </chakra.span>

                        {
                            !collapse && window.innerWidth > 1024 &&
                            <Tooltip name="Users" childArray={usersChildArray} menuNum={2} /> 
                        }
                    </Box>



                    {
                        users && 
                        <>
                            <MenuItem
                                name="Child of Users"
                                icon={FaUserFriends}
                                isChild={true}
                                childIcon={FaChalkboardTeacher}
                                link="/users/child-of-user"
                                matchPath="/users/child-of-user"
                            />
                            <MenuItem
                                name="Child of Users"
                                icon={FaUserFriends}
                                isChild={true}
                                childIcon={FaChalkboardTeacher}
                                link="/users/child-of-user"
                                matchPath="/users/child-of-user"
                            />
                            
                            
                        </>
                    }
                    

                    <Box className="sidenav-item">
                        <chakra.span
                            onClick={()=>{
                                if(window.innerWidth <= 768){
                                    setRotate(!rotate);
                                    setTeachers(!teachers);
                                    setCollapse(false);
                                } else {
                                        setTeachers(!teachers);
                                        if(!collapse){
                                            setCollapse(!collapse);
                                            setRotate(!rotate);
                                        }
                                    }
                                }}
                            >
                            <MenuItem 
                                name="Teachers"
                                hasChild
                                icon={FaChalkboardTeacher}
                                matchPath="/teachers"
                                childArray={teachersChildArray}
                                menuNum={3}
                                collapse={collapse}
                                menuState={teachers}
                            />  
                        </chakra.span>

                        {
                            !collapse && window.innerWidth > 1024 &&
                            <Tooltip name="Teachers" childArray={teachersChildArray} menuNum={3} /> 
                        }
                    </Box>
                    
                    
                    {
                        teachers && 
                        <>
                            <MenuItem
                                name="Salary of Teachers"
                                icon={FaRegMoneyBillAlt}
                                isChild={true}
                                childIcon={FaChalkboardTeacher}
                                link="/users/salary"
                                matchPath="/users/salary"
                            />

                            <MenuItem
                                name="Salary of Teachers"
                                icon={FaRegMoneyBillAlt}
                                isChild={true}
                                childIcon={FaChalkboardTeacher}
                                link="/users/salary"
                                matchPath="/users/salary"
                            /> 
                        </>
                    }                     
                </Box>
            {/* </Scrollbars> */}

            <Flex 
                bg="#4a5568" cursor="pointer" 
                minHeight="50px"
                justifyContent="center"
                alignItems="center"
                onClick={()=>{
                    setUsers(false);
                    setTeachers(false);
                    setCollapse(!collapse);
                }}
            >
                <Icon w="5" h="10" as={AiOutlineMenu}/>
            </Flex>

        </Flex>
    )
}

export default Sidebar; 