import axios from 'axios';
import React, { useEffect, useState } from 'react';


//Components
import SingelContect from "../../SingleContent/SingelContect";
import CustomPagination from "../../PageNation/CustomPagination";
import Genres from "../../Genres/Genres"

//KEY
const KEY="068aadba7272a85faf6c732c8f078f56";
const KEY2="068aadba7272a85faf6c732c8f078f56";

//My Hook
import useGeners from '../../../hooks/useGener';

const Movise = () => {
    const [page,setPage]=useState(1);
    const [contect,setContent]=useState([]);
    const [numOfPages,setNumOfPages]=useState();
    const [selectedGenres,setSelectedGenres]=useState([]);
    const [genrs,setGenrs]=useState([]);
    const generForUrl=useGeners(selectedGenres)
    const fetchApi=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${generForUrl}`)
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }

    useEffect(()=>{
        fetchApi()
    },[page,generForUrl])

    return (
        <div>
            <span className='pageTitle'>Movies</span>
                <Genres
                type="movie" selectedGenres={selectedGenres} setPage={setPage} genrs={genrs} setGenrs={setGenrs} setSelectedGenres={setSelectedGenres}/>
            <div className='tranding'>
                {
                    contect && contect.map((item)=>(
                        <SingelContect key={item.id} id={item.id} poster={item.poster_path} title={item.title||item.name} date={item.release_date || item.release_date} medi_type="Movies" vote_average={item.vote_average}/>
                    ))
                }
            </div>
            <div onClick={()=>scroll(0,0)}>
                {
                    numOfPages >1 && <CustomPagination setpage={setPage} numOfpage={numOfPages}/>
                }
            
            </div>
        </div>
    );
};

export default Movise;