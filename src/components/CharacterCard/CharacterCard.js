import React from "react";
import "./CharacterCard.css";
import { GrLike } from "react-icons/gr";

const CharacterCard = (props) => {
  return (
    <div className="CharacterCard">
      <img src={props.image} alt={props.name} />
      <div className="CharacterCard__name">
        <h5 className="CharacterCard__text">{props.name}</h5>
        <button onClick={props.change} className="CharacterCard__btn">
          <GrLike /> Like
        </button>
      </div>
    </div>
  );
};

export { CharacterCard };
