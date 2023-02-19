import React,{useEffect, useState} from 'react';
import axios from "axios";
import { createTheme, Tab, Tabs, TextField, ThemeProvider } from '@mui/material';

//Components
import CustomPagination from "../PageNation/CustomPagination";
import SingelContect from "../SingleContent/SingelContect"

import SearchIcon from '@mui/icons-material/Search';

const KEY="068aadba7272a85faf6c732c8f078f56";
const KEY2="068aadba7272a85faf6c732c8f078f56";


const Searche = () => {
    const [type,setType]=useState(0);
    const [page,setPage]=useState(1);
    const [searchtext,setSearchText]=useState("");
    const [content,setContent]=useState([]);
    const [numOfpage,setNumOfPage]=useState();
    const dark=createTheme({
        palette:{
            type:"dark",
            primary:{
                main:"#fff"
            },
        },
    })

    const fetchSearche=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" :"movie"}?api_key=${KEY}&language=en-US&query=${searchtext}&include_adult=false`)
        setContent(data.results)
        setNumOfPage(data.total_pages)
    }

    useEffect(()=>{
        window.scroll(0,0)
        fetchSearche()
    },[type,page])

    return (
        <div>
            <ThemeProvider theme={dark}>
                <div style={{display:"flex",margin:"15px 0"}}>
            <TextField
            style={{flex:1}}
            className="searchBox"
            label="Searche..."
            variant='filled'
            onChange={(e)=>setSearchText(e.target.value)}
            />
            <SearchIcon style={{cursor:"pointer",marginTop:"13px",marginLeft:"10px"}} onClick={fetchSearche}/>
        </div>
        <Tabs value={type} indicatorColor="primary" textColor='primary' onChange={(event,newValue)=>{
            setType(newValue)
            setPage(1);
        }}>
        <Tab style={{width:"50%"}} label="Search Movies"/>
        <Tab style={{width:"50%"}} label="Search TV Series"/>
        </Tabs>
            </ThemeProvider>
            <div className='trending'>
            {
                    content && content.map((item)=>(
                        <SingelContect key={item.id} id={item.id} poster={item.poster_path} title={item.title||item.name} date={item.release_date || item.release_date} medi_type={item.media_type} vote_average={item.vote_average}/>
                    ))
                }
                {searchtext && !content && (type ? <h2>No Series Found</h2>:<h2>No Movies Found</h2>)}
            </div>
            {numOfpage >1 && (
                <CustomPagination setPage={setPage} numOfpage={numOfpage}/>
            )}
        </div>
    );
};

export default Searche;