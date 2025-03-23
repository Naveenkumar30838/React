import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Search from '@mui/icons-material/Search';
import { useState } from 'react';
import './SearchBox.css'

export default function SearchBox({callback}){
    let [city , setCity] = useState("");
    const HandleCityChange = (e)=>{
        setCity(()=>(e.target.value));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Entered Value is : " , city);
        callback(city);
        setCity("");

    }
    return (<>
        <form action="" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={HandleCityChange}/>
            <Button variant="contained" type='submit'> Search</Button>
        </form>
    </>)
}