import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box
} from '@chakra-ui/react';
function Tooltip({name,childArray, menuNum}) {
    const topValue = (menuNum-1)*30;
    return (
        <Box 
            top={`${topValue}px`} 
            className="tooltip-box"> 
            <ul className="tooltip-items">
                <Box
                    bg="#2d3748"
                    fontWeight="600"
                    py="2"
                    color="white"
                    fontSize="18px"
                    borderTopLeftRadius="10px"
                    borderTopRightRadius="10px">
                    {name}
                </Box>
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
            </ul>

        </Box>
    )
}

export default Tooltip
