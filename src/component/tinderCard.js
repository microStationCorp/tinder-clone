import React, { useState } from "react";
import "../css/TinderCard.css";

function TinderCard() {
  const [people, setPeople] = useState([
    {
      name: "sujan",
      url: "https://static.toiimg.com/photo/msid-69902898/69902898.jpg?115506",
    },
    {
      name: "suman",
      url:
        "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/aamir-1586278192.jpg",
    },
    {
      name: "nayan",
      url:
        "https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg",
    },
  ]);

  return (
    <div className="tinder__card">
      {people.map((person) => (
        <div>
          <h1>{person.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default TinderCard;
