import React, { useEffect } from 'react';
import axios from 'axios';
import { Chip } from '@mui/material';


const KEY="068aadba7272a85faf6c732c8f078f56";
const KEY2="068aadba7272a85faf6c732c8f078f56"


const Genres = ({
    type,
    selectedGenres,
    genrs,
    setGenrs,
    setSelectedGenres,
    setPage

}) => {
    const fetch=async()=>{
     const {data}= await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${KEY2}&language=en-US`)
     setGenrs(data.genres)
     console.log(data.genres);
    }

    const handelerAdd=(gener)=>{
        setSelectedGenres([...selectedGenres,gener])
        setGenrs.filter((item)=>item.id!==gener.id)
        setPage(1)
    }

const handelerRemove=(gener)=>{
    setSelectedGenres(
        selectedGenres.filter((selected)=>selected.id!==gener.id)
    );
    setGenrs([...genrs,gener])


    setPage(1)
}


    useEffect(()=>{
        fetch()
        return()=>{
            setGenrs({})
        }
    },[])


    return (
        <div style={{padding:"6px 0"}}>
            {selectedGenres && selectedGenres.map((gener)=>(
                <Chip key={gener.id} size='small' color="primary" label={gener.name} style={{margin:"2px",color:"white",cursor:"pointer"}} clickable onDelete={()=>handelerRemove(gener)}/>
            ))}
            {genrs && genrs.map((gener)=>(
                <Chip key={gener.id} label={gener.name} style={{margin:"2px",color:"white",cursor:"pointer"}} clickable onClick={()=>handelerAdd(gener)}/>
            ))}
        </div>
    );
};

export default Genres;