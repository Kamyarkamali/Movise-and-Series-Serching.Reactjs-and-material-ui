const useGeners=(selectedGenres)=>{
    if(selectedGenres.length <1) return "";
    const generIds=selectedGenres.map((g)=>g.id)
    return generIds.reduce((acc,curr)=>acc+ " " +curr)
}

export default useGeners;