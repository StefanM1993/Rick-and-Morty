import React from "react";
import { FetchData } from "../services/FetchData";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import "./Characters.css";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    new FetchData()
      .get()
      .then((characterData) =>
        this.setState({ characters: characterData.results })
      );
  }

  clickChange() {
    console.log("Test Character");
  }

  render() {
    return (
      <div>
        {console.log(this.state.characters)}
        <div className="Characters">
          {this.state.characters.map((char, i) => (
            <CharacterCard
              key={i}
              image={char.image}
              name={char.name}
              change={this.clickChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export { Characters };
