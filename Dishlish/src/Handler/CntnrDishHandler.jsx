// This file Handles which component has to be rendered from DishCard Container or Dish 
import DishcardContainer  from '../Container/DishcardContainer.jsx'
import Dish from '../components/Dish/Dish.jsx'
import data from '../Data/dishData.json'
import { act, useState } from 'react'

let activeIndex=0;
export default function Handler({dishData , updateDishData , isGoingBack}){

    let [isActive , setIsActive] = useState(0);

    function makeDishActive(idx){
        activeIndex = idx;
        setIsActive(()=>(1));
    }
    function renderDishcardContainer(){
        setIsActive(()=>(0));
    }
    if(isActive===0){
        return <DishcardContainer makeDishActive={makeDishActive} dishData={dishData} updateDishData={updateDishData} isGoingBack={isGoingBack} ></DishcardContainer>
    }else{
        return <Dish dish={dishData[activeIndex] } backButtonClick={renderDishcardContainer}></Dish>
   }
}