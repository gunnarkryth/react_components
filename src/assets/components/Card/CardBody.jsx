import style from "./Card.module.scss";

export const CardBody = (props) => {
  return (
    <section className={style.CardBody}>
      <article>{props.content}</article>
    </section>
  );
};
