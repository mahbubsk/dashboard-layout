import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {
    Box, chakra, Icon, Flex
} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {IoIosArrowDown} from 'react-icons/io';
import "./MenuItem.css";

function MenuItem({name,icon, isChild,matchPath, hasChild, link, rotate, setRotate}) {
    const {pathname} = useLocation();
    const bgColor_Hover_Active = "#4a5568";
    

    return (
        <Link to={link}>
            <Flex
                alignItems="center"
                d="flex"
                textAlign="center"
                p="1"
                _hover={{bg:bgColor_Hover_Active}}
                pl={isChild && '4'}
                cursor="pointer"
                color={pathname===matchPath ? 'teal.100' : 'white'}
                bg={pathname===matchPath && bgColor_Hover_Active}

            >
                <Flex 
                    w="60px" 
                >
                    <Icon as={icon} minW="60px" ml="-5px"/>
                </Flex>
                <Flex 
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                >
                    <chakra.span>
                        {name}
                    </chakra.span>
                    <Box >
                        {
                            hasChild && 
                            <chakra.span 
                                w="5" h="5" 
                                mr="3" 
                                onClick={()=>{
                                    setRotate(!rotate);
                                    // console.log()
                                }}
                            >
                                <Icon 
                                    w="5" h="5" 
                                    as={rotate ? MdKeyboardArrowRight : IoIosArrowDown} 
                                />
                            </chakra.span>
                            
                        }
                    </Box>
                </Flex>
                
            </Flex>

            <Box>
                
            </Box>
           
        </Link>
    )
}

export default MenuItem
