export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantinty: cartItem.quantinty + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantinty: 1 }];
};
