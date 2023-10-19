import Topping from '../Topping';
import { useState } from 'react';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [selectedToppings, setSelectedToppings] = useState(toppings);

  const handleToppingChange = (toppingName, newSelected) => {
    const updatedToppings = selectedToppings.map((topping) => {
      if (topping.name === toppingName) {
        return { ...topping, selected: newSelected };
      }
      return topping;
    });

    setSelectedToppings(updatedToppings);
  };

  const selectedCount = selectedToppings.filter(
    (topping) => topping.selected,
  ).length;
  const totalPrice = selectedToppings.reduce((total, topping) => {
    return total + (topping.selected ? topping.price : 0);
  }, 0);

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedCount}, total price: {totalPrice} Euro
      </p>

      <div className="toppings">
        {selectedToppings.map((topping) => (
          <Topping
            key={topping.name}
            topping={topping}
            onToppingChange={handleToppingChange}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
