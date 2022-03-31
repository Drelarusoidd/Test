import React, {useState, useEffect} from "react";

const ListCats = () =>{

    let [cats, setCats] = useState([])

    useEffect(() => {
        getCats()
    }, [])

    let getCats = async() => {
        let response = await fetch('http://127.0.0.1:8000/api/list')
        let data = await response.json()
        console.log("DATA", data)
        getCats(data)
    }

    return(
        <div>
            <div className="cats-list">
                {cats.map((cat, index)=> (
                    <h3>{cat.breed}</h3>
                ))}
            </div>
        </div>

    )
}

export default ListCats;