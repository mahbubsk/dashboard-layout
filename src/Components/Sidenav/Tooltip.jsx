import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box
} from '@chakra-ui/react';
import {Scrollbars} from 'react-custom-scrollbars';

function Tooltip({name,childArray, menuNum}) {
    const topValue = (menuNum-1)*30;
    return (

        <Box 
            top={`${topValue}px`} 
            className="tooltip-box"> 
            <Box
                bg="#2d3748"
                fontWeight="600"
                py="2"
                color="white"
                fontSize="18px"
                borderTopLeftRadius="10px"
                borderTopRightRadius="10px"
                textAlign="center"
                ml="10px"
                width="100%"
            >
                {name}
            </Box>
            <Scrollbars style={{height:'250px'}} autoHide 
                        autoHideTimeout={300}
                        autoHideDuration={500} className="tooltip-items">
                
                {
                    childArray && 
                    childArray.map((childArray,i)=> ( 
                        <li key={i} className="tooltip-item"> 
                            <Link to={childArray.link}> 
                                {childArray.childName}
                            </Link>
                        </li> 
                    )) 
                }
            </Scrollbars>

        </Box>
    )
}

export default Tooltip
