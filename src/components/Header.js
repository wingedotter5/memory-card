import classes from "../styles/Header.module.css";

export default function Header({ score, highScore }) {
  return (
    <header className={classes.header}>
      <h1>Memory Game</h1>
      <div className={classes.score}>
        <h2>{`Score: ${score * 100}`}</h2>
        <h2>{`Best Score: ${highScore * 100}`}</h2>
      </div>
    </header>
  );
}
