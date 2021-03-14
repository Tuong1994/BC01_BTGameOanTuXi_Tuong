const stateDefault = {
  win: 0,
  round: 0,
  result: "I AM IRON MAN",
  arrItem: [
    { id: "keo", img: "./img/keo.png", bet: true },
    { id: "bua", img: "./img/bua.png", bet: false },
    { id: "bao", img: "./img/bao.png", bet: false },
  ],
  computer: { id: "bao", img: "./img/bao.png" },
};

export const gameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BET": {
      let arrItemUpdate = [...state.arrItem];
      arrItemUpdate = arrItemUpdate.map((item, index) => {
        if (item.id === action.idItem) {
          return { ...item, bet: true };
        }
        return { ...item, bet: false };
      });
      state.arrItem = arrItemUpdate;
      return { ...state };
    }

    case "RAN_DOM": {
      let ranDomNumber = Math.floor(Math.random() * 3);
      state.computer = state.arrItem[ranDomNumber];
      return { ...state };
    }

    case "RESULT": {
      let player = state.arrItem.find((item) => item.bet === true);
      let computer = state.computer;
      state.round += 1;
      switch (player.id) {
        case "keo": {
          if (computer.id === "keo") {
            state.result = "DRAW MATCH";
          } else if (computer.id === "bua") {
            state.result = "I AM INEVITABLE";
          } else {
            state.result = "I AM IRON MAN";
            state.win += 1;
          }
        }
        break;
        case "bua": {
          if (computer.id === "keo") {
            state.result = "I AM IRON MAN";
            state.win += 1;
          } else if (computer.id === "bua") {
            state.result = "DRAW MATCH";
          } else {
            state.result = "I AM INEVITABLE";
          }
        }
        break;
        case "bao": {
          if (computer.id === "keo") {
            state.result = "I AM INEVITABLE";
          } else if (computer.id === "bua") {
            state.result = "I AM IRON MAN";
            state.win += 1;
          } else {
            state.result = "DRAW MATCH";
          }
        }
        break;
        default : return {...state};
      }
    }
    default:
      return { ...state };
  }
};
