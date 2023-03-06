import React from "react"

function Cards(props) {
    return (
        <div className="card" width='50 px' height='50px'>
            <img src={props.text.image} className="card-img-top" alt="..." height='50 px' width='50 px'/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{props.text.name}</p>
                    <p className="card-text">{props.text.status}</p>
                    <p className="card-text">{props.text.species}</p>
                    <p className="card-text">{props.text.gender}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>


    )
}

export default Cards