// It combines the header and content section components 
import { useState } from "react";
import Header from "../components/header/header";
import Handler from "../Handler/CntnrDishHandler";
import data from '../Data/dishData.json'
let isGoingBack=false;
export default function Dishcard_header(){

    let [dishData , setDishData] = useState(data.slice(0,6));

    function updateDishData(newDishData , length=6 , receivedIsGoingBack=false){
        isGoingBack=receivedIsGoingBack;
        setDishData([...newDishData].slice(0,length));
    }
    return <>
        <Header dishData={dishData} updateDishData={updateDishData}></Header>
        <Handler dishData={dishData} updateDishData={updateDishData} isGoingBack={isGoingBack} ></Handler>
    </>
}