import React from "react"

const Cards =(props) => {
   

       const theBlock = props.characters.map(card=>{
        return (
            <div className="card" width='50 px' height='50px'>
                <img src={card.image} className="card-img-top" alt="..." height='50 px' width='50 px'/>
                <div className="card-body">
                    <h5 className="card-title">Character</h5>
                    <p className="card-text">Name: {card.name}</p>
                    <p className="card-text">Status: {card.status}</p>
                    <p className="card-text">Species: {card.species}</p>
                    <p className="card-text">Gender: {card.gender}</p>
                
                </div>
            </div>
        )
        
        })

  
        
        
        return <div>{theBlock}</div>
        


    
}

export default Cards