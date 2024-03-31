import * as React from 'react';
import Box from '@mui/material/Box';
import './HolderBox.css';


function HolderBox({content}){
    return (<div className='HolderBox'>
        <Box>
            {content}
        </Box>
    </div>);
}

export default HolderBox;