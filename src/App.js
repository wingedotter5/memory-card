import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import { COLORS } from "./constants";
import { shuffle } from "./utils";

function App() {
  const [items, setItems] = useState(COLORS);
  const [clickedItems, setClickedItems] = useState([]);
  const [highScore, setHighScore] = useState(0);

  const onItemClick = (item) => {
    if (!clickedItems.includes(item)) {
      setClickedItems(clickedItems.concat(item));
      setItems(shuffle(items));
    } else {
      if (highScore < clickedItems.length) setHighScore(clickedItems.length);
      setClickedItems([]);
    }
  };

  return (
    <>
      <Header score={clickedItems.length} highScore={highScore} />
      <Board items={items} onItemClick={onItemClick} />
    </>
  );
}

export default App;
