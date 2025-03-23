import { useState } from "react";

export default function Cart({dishData , updateDishData}){
    const cartRegularStyle ={
        color:"red",
        cursor:"pointer"
    }
    const cartClickStyle={
        color:"blue",
        cursor:"pointer",
        fontSize:"1.1rem",
    }
    let [cartStyle , setCartStyle] = useState(cartRegularStyle)
    function HandleCartClick(){
        const out = dishData.filter((e)=>(e.isBookmarked))
        updateDishData(out , 6, true);    
        setCartStyle(cartClickStyle);
    }
    return (<>
        <span onClick={HandleCartClick} style={cartStyle}><i className="fa-regular fa-star"></i></span>
    </>);
}