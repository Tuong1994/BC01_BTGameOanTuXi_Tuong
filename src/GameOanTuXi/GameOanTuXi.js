import React, { Component } from 'react';
import Computer from './Computer';
import KetQua from './KetQua';
import './style.css'
import Player from './Player';
import {connect} from 'react-redux';

class GameOanTuXi extends Component {
    render() {
        return (
            <div className="bgGame text-center">
                <div className="row mt-4">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQua />
                        <button style={{outline : 'none'}} className="btnPlayGame" onClick={() => {
                            this.props.ranDom()
                        }}>Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ranDom : () => {
            let count = 0;
            let time = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM',
                })
                count++;
                if (count > 10) {
                    clearInterval(time);
                    dispatch({
                        type: 'RESULT',
                    })
                }
            }, 100);
            
        }
    }
}


export default connect(null, mapDispatchToProps)(GameOanTuXi);