import React from "react";
import ReactDom from "react-dom";
const name = "shoaib";
const name1 = "Khan!";
const currentDate = new Date();
const year = currentDate.getFullYear();
const number = Math.floor(Math.random() * 10);
const styl = { color: "green", fontSize: "20px" };
const imagg = "https://picsum.photos/200";
ReactDom.render(
  <div>
    <h1 className="heading">
      hello {name} {name1}
    </h1>
    <ul>
      <li>rihan</li>
      <li>sharif</li>
      <li>rr</li>
    </ul>
    <div>
      <img
        className="border"
        alt="random"
        src="https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s"
      ></img>
      <img
        className="border"
        alt="random"
        src="https://fastly.picsum.photos/id/336/400/300.jpg?hmac=-gvK85OgRqyDF8is05zl-563ht8LnIQ2_toSlFkcj4w"
      />
    </div>
    <div>
      <p> another way of adding images </p>
      <img className="border" alt="random" src={imagg} />
      <p>// changing that image to grayscale//</p>
      <img className="border" alt="random" src={imagg + "?grayscale"} />
      <p>inline css</p>
      <h2 style={{ color: "green", fontSize: "20px" }}> GO TO HELL</h2>
      <p> giving inline css by delering css in const variable</p>
      <h2 style={styl}>go to hell</h2>
    </div>
    <p>Your lucky name is {name + " " + name1}</p>
    <p>Your lucky number is {number + 1}</p>
    <p>Year is {year}</p>
  </div>,
  document.getElementById("root")
);
