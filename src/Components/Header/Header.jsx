import React from 'react'
import {
    useDisclosure, Flex, Icon, Spacer, chakra
} from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import SignIn from '../SignIn/SignIn';

function Header({collapse, setCollapse, setUsers}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("right");
    return (
        <Flex
            alignItems="center"
            // justifyContent="space-between"
            boxShadow="md" 
            h="60px" w="100%" 
            bg="#edf2f9"
        >
            <chakra.span 
                cursor="pointer"
                    onClick={()=>{
                        setUsers(false)
                        setCollapse(!collapse);
                    }} 
                >
                <Icon 
                    as={AiOutlineMenu} 
                    w={{base:'60px', sm:'60px', md:'0px', lg:'0px'}}
                       
                />
            </chakra.span>
            
            <Spacer />
            <chakra.span cursor="pointer" onClick={onOpen}>
                <Icon as={FaUserCircle} h="30px" w="60px"/> 
            </chakra.span> 
            <SignIn 
                isOpen={isOpen} 
                onOpen={onOpen} 
                onClose={onClose} 
                placement={placement} 
                setPlacement={setPlacement}
            />

        </Flex>
    )
}

export default Header
