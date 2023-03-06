
import React from "react";
import Cards from "./Cards";



function App() {
  const [cardList, setCardList] = React.useState({})

  async function getAPI() {
    await fetch(`https://rickandmortyapi.com/api/character/1`)
      .then(response => response.json())
      .then(data => setCardList(data));
  }

  React.useEffect(() => {
    getAPI();
    console.log(cardList)
  }, []);

 

  return (
    <div className="container-sm">
      <Cards
      text = {cardList}
      />
      <Cards
      text = {cardList}
      />
      <Cards
      text = {cardList}
      />
      <Cards
      text = {cardList}
      />
    </div>
  );
}

export default App;
