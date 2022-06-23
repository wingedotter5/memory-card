import classes from "../styles/Card.module.css";

export default function Card({ item, onItemClick }) {
  return (
    <div className={classes.card} onClick={() => onItemClick(item)}>
      <img src={item.image} alt={item.name} style={{ maxWidth: "100%" }} />
    </div>
  );
}
