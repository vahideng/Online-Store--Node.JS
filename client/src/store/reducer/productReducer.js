// import * as actionTypes from '../action/actionTypes'
// import _ from "lodash";

// export default function(state = {}, action) {
//   switch (action.type) {
//     case actionTypes:
//       let objectResult = {};
//       for (let item of action.payload.data) {
//         let newObject = Object.assign({}, item);
//         objectResult[newObject.id] = newObject;
//       }
//       return { ...objectResult, ...state };
//     //return _.mapKeys(action.payload.data, "id");
//     case FETCH_POST:
//       console.log(action.payload.data.id);
//       return { ...state, [action.payload.data.id]: action.payload.data };

//     case DELETE_POST:
//       return _.omit(state, action.payload);

//     default:
//       return state;
//   }
// }