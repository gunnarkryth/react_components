import style from "./Card.module.scss";

export const CardImage = (props) => {
  return (
    <div
      className={style.CardImage}
      style={{ backgroundImage: `url(${props.src})` }}
      src={props.src}
    ></div>
  );
};
