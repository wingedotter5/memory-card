import classes from "../styles/Card.module.css";

export default function Card({ color, onItemClick }) {
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={classes.card}
      onClick={() => onItemClick(color)}
    ></div>
  );
}
