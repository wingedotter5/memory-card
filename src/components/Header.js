import classes from "../styles/Header.module.css";

export default function Header({ score, highScore }) {
  return (
    <header className={classes.header}>
      <div>
        <h1>Rick &amp; Morty Memory Game</h1>
        <h3>( Click all of them, but not twice! )</h3>
      </div>
      <div className={classes.score}>
        <h2>{`Score: ${score * 100}`}</h2>
        <h2>{`Best Score: ${highScore * 100}`}</h2>
      </div>
    </header>
  );
}
