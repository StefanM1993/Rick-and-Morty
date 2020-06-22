import React from "react";
import { FetchData } from "../services/FetchData";

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

  render() {
    return <div>{console.log(this.state.characters)}</div>;
  }
}

export { Characters };
