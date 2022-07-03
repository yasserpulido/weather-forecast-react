import "./Card.css";

const Card = (props: any) => {
  return <article className="card weather">{props.children}</article>;
};

export default Card;
