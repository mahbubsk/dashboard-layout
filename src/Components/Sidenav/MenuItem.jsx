import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {
    Box, chakra, Icon, Flex
} from "@chakra-ui/react";
import {MdKeyboardArrowRight} from 'react-icons/md';
import {IoIosArrowDown} from 'react-icons/io';
import "./MenuItem.css";

function MenuItem(props) { 
    const {
        name, icon, isChild, 
        matchPath, hasChild, link, 
        menuState
    } = props;

    const {pathname} = useLocation();
    const bgColor_Hover_Active = "#4a5568";
    
    // console.log(usersChildArray[0].name);
    const menu = (
        <>
            <Flex
                alignItems="center"
                d="flex"
                p="1"
                _hover={{bg:bgColor_Hover_Active}}
                pl={isChild && '4'}
                cursor="pointer"
                color={pathname===matchPath ? 'teal.200' : 'white'}
                position="relative">

                <Flex w="60px">
                    <Icon as={icon} minW="60px" ml="-5px"/>
                </Flex>
                <Flex 
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%">
                    <Box>
                        <chakra.span> {name} </chakra.span>
                    </Box>
                    
                    <Box >
                        {
                            hasChild && 
                            <chakra.span w="5" h="5" mr="3">
                                <Icon 
                                    w="5" h="5" 
                                    as={
                                        menuState 
                                        ? IoIosArrowDown 
                                        : MdKeyboardArrowRight
                                    } 
                                />
                            </chakra.span>
                            
                        }
                    </Box>
                </Flex> 
            </Flex>

           
        </>
    )
    return (
        <>
            { 
                link 
                    ? <Link to={link}> {menu} </Link> 
                    : menu 
            } 
        </>
    )
}

export default MenuItem
