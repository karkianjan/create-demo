import React from "react";
import Liftingup from "./liftingup";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
  }

  handleChange = (temp) => {
    this.setState({ temperature: temp });
  };
  render() {
    return (
      <div>
        <p> {this.state.temperature} </p>
        <Liftingup
          temperature={this.state.temperature}
          onClickTemperature={this.handleChange}
        />
      </div>
    );
  }
}
export default Parent;
