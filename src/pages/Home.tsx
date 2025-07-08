import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      Bienvenue :
      <br />
      <Link to={"/editor"}>Nouveau</Link>
      <br />
      <Link to={"/editor/0"}>Edition position 0</Link>
      <br />
      <Link to={"/thumbnail"}>liste</Link>
      <br />
    </div>
  );
};
export default Home;
