import style from "./Card.module.scss"

export const CardContainer = (props) => {
  return <div className={style.CardContainer}>{props.children}</div>;
};
