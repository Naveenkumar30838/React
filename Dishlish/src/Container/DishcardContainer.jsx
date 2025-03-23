import { useState } from 'react';
import Dishcard from '../components/DishCard/Dishcard.jsx';
import data from '../Data/dishData.json'
const str = "Helloworld";
function descShortner(data){
    return data.slice(0,280);
}
export default function DishcardContainer({makeDishActive  ,dishData  , updateDishData , isGoingBack}){
    console.log("Called DishCard container and isGoingBack's Value is : " , isGoingBack);
    const containerStyle ={
        "display":"flex",
        "justifyContent":"center",
        "flexWrap": "wrap",
        paddingBlock:"10px 30px",
        "gap":"40px"
    }
    const loadButtonStyle={
        fontSize:"1.2rem",
        padding : "2px 6px",
        position:"absolute",
        left:"48vw",

    }
    function handleBookMarkClick(idx){
        dishData[idx].isBookmarked= !dishData[idx].isBookmarked;
        updateDishData(dishData);
    }
    if(dishData.length==0){
        return (<>
            <h1>No Result  </h1>
        </>)
    }
    function HandleLoadMoreClick(){
        updateDishData([...data] , data.length , false)
    }
    function HandleGoBackClick(){
        updateDishData([...data] , 6 , false);
    }
    return <>
        {isGoingBack&&<button onClick={HandleGoBackClick}>Go Back</button>}
        <div className="DishcardContainer" style={containerStyle}>
            {dishData.map((e, idx)=>{
                const desc =descShortner(dishData[idx].desc)+" ... "
                return <Dishcard dishData={{...dishData[idx] , desc:desc}} makeDishActive={makeDishActive} idx={idx}  handleBookMarkClick={handleBookMarkClick} key={idx} ></Dishcard>
            })}
        </div>
        {dishData.length !=data.length &&<button onClick={HandleLoadMoreClick} style={loadButtonStyle}>Load All</button>}

    </>
}