import './header.css'
import Cart from './cart'
import SearchBox from './searchBox'
export default function Header({dishData , updateDishData}){
    return <div className="Header">
        <div className="logo"><h2>DishLish</h2></div>
        <SearchBox  updateDishData={updateDishData}/>
        <div className="nav-items">
            <ul>
                <li><Cart dishData={dishData} updateDishData={updateDishData}></Cart></li>
                <li><a href="#">Home</a></li>
                <li><a href="./searchBox.jsx">Contact Us</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </div>
    </div>
}