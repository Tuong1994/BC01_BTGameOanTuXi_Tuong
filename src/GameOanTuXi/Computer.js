import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframes = `@keyframes upDown${Date.now()} {
      0% {top: -30px}
      20% {top: 80px}
      40% {top: -30px}
      60% {top: 80px}
      80% {top: 30px}
      100% {top: 0px}
    }`;
    let { computer } = this.props;
    return (
      <div className="character">
        <style>{keyframes}</style>
        <div className="computer-thought">
          <img
            style={{animation: `upDown${Date.now()} 1s`}}
            src={computer.img}
            alt={computer.img}
          />
        </div>

        <div className="speech-bubble-1"></div>

        <img src="./img/playerComputer.png" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.gameReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
