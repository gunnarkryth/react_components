import style from "./Card.module.scss"

export const CardBody = (props) => {
  return <article className={style.CardBody}>
    {props.content}
  </article>;
};
