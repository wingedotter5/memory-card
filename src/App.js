import { useEffect, useState } from "react";
import Board from "./components/Board";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { COLORS } from "./constants";
import { shuffle } from "./utils";

function App() {
  const [items, setItems] = useState(COLORS);
  const [clickedItems, setClickedItems] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const onItemClick = (item) => {
    if (clickedItems.includes(item)) {
      // Game over
      if (highScore < clickedItems.length) setHighScore(clickedItems.length);
      setGameOver(true);
    } else {
      setClickedItems(clickedItems.concat(item));
      setItems(shuffle(items));
    }
  };

  useEffect(() => {
    if (clickedItems.length === items.length) {
      if (highScore < clickedItems.length) setHighScore(clickedItems.length);
      setGameOver(true);
    }
  }, [clickedItems, highScore, items]);

  const resetGame = () => {
    setGameOver(false);
    setClickedItems([]);
  };

  return (
    <div>
      <Header score={clickedItems.length} highScore={highScore} />
      <Board items={items} onItemClick={onItemClick} />
      {gameOver && (
        <Modal defaultOpen={gameOver} onClose={resetGame} title="Play again">
          {items.length === clickedItems.length ? (
            <h1>You won the game!</h1>
          ) : (
            <h1>Game Over!</h1>
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
