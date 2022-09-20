// Cada vez que se dispare una accion obtenemos esa informacion y hacemos console.log

// store: es el store de la aplicacion
// next: es esa funcion que llamaremos cuando el middleware haya terminado su trabajo, hay que mandarle el action
// action: es la informacion de lo que esta pasando
export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: {
      ...actionInfo.action,
      payload: featured,
    },
  };
  next(updatedActionInfo);
};

export const numeration = store => next => actionInfo => {
  const newPayload = actionInfo.action.payload.map((pokemon, index) => {
    return {
      ...pokemon,
      name: `${index + 1} ${pokemon.name}`,
    };
  });

  const updatedActionInfo = {
    ...actionInfo,
    action: {
      ...actionInfo.action,
      payload: newPayload,
    },
  };

  next(updatedActionInfo);
};
