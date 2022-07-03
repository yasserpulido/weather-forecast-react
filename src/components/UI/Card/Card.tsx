import "./Card.css";

const Card = (props: any) => {
  const style = props.className ? "card-weather--today" : "card-weather";

  return <article className={style}>{props.children}</article>;
};

export default Card;
