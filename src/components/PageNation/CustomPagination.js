import React from 'react';

import { createTheme, Pagination, ThemeProvider } from '@mui/material';

const darkThem=createTheme({
    palette:{
        type:"dark",
    },
});

const CustomPagination = ({setPage,numOfpage=10}) => {
    const handelerPage=(page)=>{
        setPage(page)
        window.scroll(0,0)
    }
    return (
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:"10px"
        }}>
            <ThemeProvider theme={darkThem}>
            <Pagination color="primary" hideNextButton hidePrevButton count={numOfpage} onChange={(e)=>handelerPage(e.target.textContent)}/>
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;