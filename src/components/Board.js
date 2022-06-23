import Card from "./Card";
import classes from "../styles/Board.module.css";

export default function Board({ onItemClick, items }) {
  return (
    <div id="board" className={classes.board}>
      {items.map((item) => (
        <Card key={item} color={item} onItemClick={onItemClick} />
      ))}
    </div>
  );
}
