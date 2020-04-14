export const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const reduceCartItem = (cartItems, cartItemToReduce) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToReduce.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToReduce.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
