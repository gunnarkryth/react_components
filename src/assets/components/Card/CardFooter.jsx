import style from "./Card.module.scss"

export const CardFooter = (props) => {
  return <footer className={style.CardFooter}>{props.content}</footer>;
};
