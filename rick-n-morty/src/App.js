
import React from "react";
import Cards from "./Cards";



function App() {
  const [cardList, setCardList] = React.useState([])

  async function getAPI() {
    await fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then(data => setCardList(data.results));
  }

  React.useEffect(() => {
    getAPI();

  }, []);
 

console.log(cardList)
  return (
    <div className="container-sm">
      {/* <CardsArray/> */}
      <Cards characters ={cardList}/>
    </div>
  );
}

export default App;
