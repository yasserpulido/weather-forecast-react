import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron p-5 rounded-2 m-3">
      <h1 className="display-4 fw-bold">Weather Forecast</h1>
      <p className="lead">
        Here you can look at the weather in five different cities.
      </p>
      <hr className="my-4" />
      <p>
        This website is based on <b>React</b> with <b>TypeScript</b>, using{" "}
        <b>Redux</b> and connected to an external APIs.
      </p>
    </div>
  );
};

export default Jumbotron;
