import React from 'react'
import {
    Box, chakra, Icon
} from "@chakra-ui/react";
import {Link} from 'react-router-dom';

function MenuItem({name,icon, isChild, childIcon,active, link}) {
    return (
        <Link to={link}>
            <Box 
                alignItems="center"
                d="flex"
                textAlign="center"
                p="1"
                _hover={{bg:"#4a5568"}}
                bg={active && '#4a5568'}
                pl={isChild && '4'}
                cursor="pointer"
            >
                <Box w="60px" textAlign="center">
                    <Icon as={icon} style={{width:"60px"}}/>
                </Box>
                <chakra.span>
                    {name}
                </chakra.span>
            </Box>
           
        </Link>
    )
}

export default MenuItem
