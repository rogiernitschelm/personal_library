export default function({ dispatch }) {
  return next => action => {

    // if the action doesn't have a payload or doesn't have a
    // .then property, then send it on.

    // We check to see if there is a .then on the object, to
    // determine if the object is a promise.
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // create new action with the old type. Replace the payload
        // (the promise) with the new response data.
        // It will NOT be a promise anymore next time
        // so no infinite loop :D
        const newAction = { ...action, payload: response};
        // take this action and send it to EVERYTHING again.
        dispatch(newAction);
      });
  }
}
