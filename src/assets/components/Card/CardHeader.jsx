import style from "./Card.module.scss";

export const CardHeader = (props) => {
  return (
    <header className={style.CardHeader}>
      <h3>{props.title}</h3>
    </header>
  );
};
