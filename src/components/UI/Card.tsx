import "./Card.css";

const Card = () => {
  return (
    <article className="card weather">
      <div className="icon bubble black">
        <div className="spin">
          {/* <img src="https://dl.dropbox.com/s/0qq5anxliaopt8d/sun.png"> */}
        </div>
      </div>

      <h1>Monday</h1>
      <span className="temp">23&deg;</span>
      <span className="high-low">15&deg;/ 28&deg;</span>
    </article>
  );
};

export default Card;
