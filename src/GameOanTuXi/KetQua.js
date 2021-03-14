import React, { Component } from 'react';
import {connect} from 'react-redux';

class KetQua extends Component {
    render() {
        let {result, win, round} = this.props;
        let color = {};
        if (result === 'I AM INEVITABLE') {
            color = {color: '#6f3c89'};
        } else if (result === 'DRAW MATCH') {
            color = {color: '#fff'};
        }
        return (
            <div className="result">
                <h1 style={color}>{result}</h1>
                <div className="win">
                    <p>WIN : <span>{win}</span></p>
                </div>
                <div className="round">
                    <p>ROUND : <span>{round}</span></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result : state.gameReducer.result,
        win : state.gameReducer.win,
        round : state.gameReducer.round
    }
}

export default connect(mapStateToProps)(KetQua);