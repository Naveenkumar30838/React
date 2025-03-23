import { useState } from "react"
import  dishData from'../../Data/dishData.json'

export default function SearchBox({ updateDishData}){
    let [searchVal , setSearchVal] = useState("");
    function updateSearchValue(e){
        setSearchVal(e.target.value)
    }
    function isSubstring(str1 , str2){
        if(str2.trim().length==0  ){return false;}
        let length = str1.length<str2.length?str1.length : str2.length;
        for(let i=0;i<length;i++){
            if(str1.charAt(i)!=str2.charAt(i)){
                return false;
            }
        }
        return true;
    }
    function searchInDataBase(){
        
            for(let i=0;i<dishData.length;i++){
            const str1 = dishData[i].name.toLowerCase();
            const str2 = searchVal.toLowerCase();
            if(str1==str2 || isSubstring(str1,str2)){
                return i;
            }
        }
        return -1;
    }
    function HandleSubmit(){
        let idx = searchInDataBase();
        if(idx!=-1){
            updateDishData([dishData[idx]] , 6 , true);
            setSearchVal("")
        }else{
            window.alert("Invalid Query")
        }
    }
    return (<>
        <div className="SearchBox" >
            <input type="text" value={searchVal} onChange={updateSearchValue} style={{fontSize:"1.18rem"}}/>
            <button type="submit" onClick={HandleSubmit} style={{cursor:"pointer"}}><i className="fa-brands fa-searchengin" style={{fontSize:"1.21rem"}}></i></button>
        </div>
    </>)
}