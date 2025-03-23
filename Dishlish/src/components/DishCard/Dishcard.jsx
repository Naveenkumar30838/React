import './Dishcard.css'
export default function Dishcard({dishData , makeDishActive ,idx , handleBookMarkClick}){
    return <>
        <div className="Dishcard" >
            <div className="Dishcard-img"><img src={dishData.src} alt="Image of Dish" /></div>
            <div className="Dishcard-title flex" >
                <h3 onClick={()=>{makeDishActive(idx)}}>{dishData.name}</h3>
                {dishData.isBookmarked?(<p onClick={()=>{handleBookMarkClick(idx)}}><i className="fa-solid fa-bookmark"></i></p>):(<p onClick={()=>{handleBookMarkClick(idx)}}><i className="fa-regular fa-bookmark" ></i></p>)}
            </div>
            <div className="Dishcard-desc">{dishData.desc}</div>
        </div>
    </>
}