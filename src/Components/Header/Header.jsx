import React from 'react'
import {
    Box, Flex, Center, Icon, chakra
} from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai';

function Header({collapse, setCollapse, setUsers}) {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            boxShadow="md" 
            h="60px" w="100%" 
            bg="#edf2f9"
        >
            <Icon 
                as={AiOutlineMenu} 
                w={{base:'60px', sm:'60px', md:'0px', lg:'0px'}}
                cursor="pointer"
                onClick={()=>{
                    setUsers(false)
                    setCollapse(!collapse);
                }}    
            />
            <Icon as="" w="60px" h="30px"/>
        </Flex>
    )
}

export default Header
