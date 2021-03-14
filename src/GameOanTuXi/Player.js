import React, { Component } from "react";
import { connect } from 'react-redux';

class Player extends Component {
  render() {
    let {arrItem} = this.props;
    return (
      <div className="character">
        <div className="player-thought">
          <img src={arrItem.find(item => item.bet === true).img} alt={arrItem.find(item => item.bet === true).img} />
        </div>

        <div className="speech-bubble"></div>

        <img src="./img/player.png" />

        <div className="row">
          {arrItem.map((item, index) => {
            let background = {};
            if(item.bet){
              background = {background : '#ffff4d'}
            };
            return <div key={index} className="col-4">
            <button style={background} className="btnItem" onClick={() => {
              this.props.betItem(item.id)
            }}>
              <img src={item.img} alt={item.img} />
            </button>
          </div>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrItem : state.gameReducer.arrItem
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    betItem : (idItem) => {
      dispatch({
        type : 'BET',
        idItem
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Player);
