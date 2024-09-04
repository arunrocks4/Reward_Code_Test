import React from 'react';

function calculateReward(total) {
    let reward = 0;
    if(total > 50 && total <= 100) {
        reward = total - 50;
    }
    if(total > 50 && total > 100) {
        reward = 50 + ((total - 100) * 2);
    }
    return reward;
}

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const rewardPoint = calculateReward(total);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <p>Reward Point: {rewardPoint.toFixed(0)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
