import './Dish.css'
export default function Dish ({dish , backButtonClick}){
    if(dish==undefined){

    }
    return <>
        <div className="dish">
            <button onClick={()=>{backButtonClick()}}>Go Back</button>
            <div className="dish-image"><img src={dish.src} alt="" /></div>
            <div className="dish-name"><h2>{dish.name}</h2></div>
            <div className="dish-desc"><p>{dish.desc}</p></div>
            <div className="dish-recipe"></div>
        </div>
    </>
}