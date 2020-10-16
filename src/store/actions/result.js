import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
  // const updatedResult = result * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result,
  };
};

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id,
  };
};
