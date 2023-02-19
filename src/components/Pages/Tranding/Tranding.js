import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Tranding.css"

import CustomPagination from "../../PageNation/CustomPagination"

//Components
import SingelContect from '../../SingleContent/SingelContect';

const Tranding = () => {
    const [contect,setContct]=useState([])
    const [pages,setPages]=useState(1)


    const fetchTranding=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=068aadba7272a85faf6c732c8f078f56&page=${pages}`)
        setContct(data.results)
    }

    useEffect(()=>{
        fetchTranding()
    },[pages])

    return (
        <div>
            <span className='pageTitle'>Tranding</span>
            <div className='tranding'>
                {
                    contect && contect.map((item)=>(
                        <SingelContect key={item.id} id={item.id} poster={item.poster_path} title={item.title||item.name} date={item.release_date || item.release_date} medi_type={item.media_type} vote_average={item.vote_average}/>
                    ))
                }
            </div>
            <CustomPagination setpage={setPages}/>
        </div>
    );
};

export default Tranding;