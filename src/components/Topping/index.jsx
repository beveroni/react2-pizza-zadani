import Check from '../Check';
import './style.css';

const Topping = ({ topping, onToppingChange }) => {
  const handleCheckChange = (newChecked) => {
    onToppingChange(topping.name, newChecked);
  };

  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={handleCheckChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
