import React from 'react'
import {
    Box, chakra, Icon
} from "@chakra-ui/react";

function MenuItem({name,icon, hasChild, childIcon,active}) {
    return (
        <Box>
            <Box 
                alignItems="center"
                d="flex"
                textAlign="center"
                p="1"
                _hover={{bg:"#4a5568"}}
                bg={active && '#4a5568'}
                ml={hasChild && '2'}
            >
                <Box w="60px" textAlign="center">
                    <Icon as={icon} style={{width:"60px"}}/>
                </Box>
                <chakra.span>
                    {name}
                </chakra.span>
            </Box>
           
        </Box>
    )
}

export default MenuItem
