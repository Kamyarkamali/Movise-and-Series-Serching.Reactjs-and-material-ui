import React from 'react';
import { unavalibale } from '../Config/Config';
import { Typography } from '@mui/material/styles/createTypography';

import "./SingelContect.css"

import { img_300 } from '../Config/Config';

import {Badge} from "@mui/material"

const SingelContect = ({
    id,
    poster,
    title,
    date,
    medi_type,
    vote_average,
    name
}) => {
    return (
        <div className='media'>
          <Badge badgeContent={vote_average} color={vote_average>6?"primary":"secondary"}/>
            <img className='poster' src={poster?`${img_300}/${poster}`:unavalibale} alt={name}/>
            <b className='title'>{title}</b>
            <div className='sub'>
            <span className='suntitle'>{medi_type==="tv"?"TV Series":"Movie"}</span>
            <span className='suntitle'>{date}</span>
            </div>
        </div>
    );
};

export default SingelContect;