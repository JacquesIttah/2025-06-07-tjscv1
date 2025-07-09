import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Bonjour à tous</h1>
      <p>Creer vos memes personnalisés</p>
      <p>
        {/* <a href="/editor">Nouveau</a> */}
        <Link to="/editor">Nouveau</Link><br/>
        <Link to="/editor/0">Edit0</Link><br/>
        <Link to="/thumbnail">Thumbnail</Link>
       
      </p>
    </div>
  );
}

export default Home;
