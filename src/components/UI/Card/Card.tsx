import "./Card.css";

const Card = (props: any) => {
  const style = props.className ? "card-weather--today" : "card-weather";

  return (
    <article data-testid="weather-detail" className={style}>
      {props.children}
    </article>
  );
};

export default Card;
