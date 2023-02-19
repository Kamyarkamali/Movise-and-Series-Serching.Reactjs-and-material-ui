import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import { useHistory } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history=useHistory()

  useEffect(()=>{
    if(value===0)
    history.push("/")
    else if(value===1) history.push("/movies")
    else if(value===2) history.push("/Serise")
    else if(value===3) history.push("/searche")
  },[value,history])


  return (
    <Box sx={{ width:"100%",position:"fixed",bottom:0,zIndex:100,backgroundColor:"#2d313a"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movise" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Serise" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}