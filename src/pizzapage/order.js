import React from "react";

function Order(props) {
  const { change, values, submit, disabled, errors } = props;

  const onSubmit = event => {
    event.preventDefault();
    submit();
  };

  const onChange = event => {
    const { name, value, type, checked } = event.target;
    const pizza = type === "checkbox" ? checked : value;
    change(name, pizza);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} id="pizza-order">
        <h1>Order Here!</h1>
        
        <div className="form-group">
          <label htmlFor="name-input">Order For:</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={values.name}
            onChange={onChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">Pizza Size:</label>
          <select
            name="size"
            id="size"
            value={values.size}
            onChange={onChange}
            className="form-control"
          >
            <option value="">Choose your size pizza!</option>
            <option value="small">Small 12 inch</option>
            <option value="medium">Medium 16 inch</option>
            <option value="large">Large 20 inch</option>
          </select>
        </div>

        <h2>Toppings</h2>
        <div className="form-group">
          {["bacon", "sausage", "pepperoni", "peppers", "mushrooms", "pineapple"].map(topping => (
            <label key={topping}>
              {topping.charAt(0).toUpperCase() + topping.slice(1)}{" "}
              <input
                type="checkbox"
                name={topping}
                checked={values[topping]}
                onChange={onChange}
              />
            </label>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="custom-box">Allergies?</label>
          <input
            type="text"
            name="custom"
            value={values.custom}
            onChange={onChange}
            id="custom-box"
            className="form-control"
            placeholder="Let us know here"
          />
        </div>

        <div className="errors">
          <span>{errors.name}</span>
          <span>{errors.size}</span>
        </div>

        <button
          type="submit"
          id="order-button"
          disabled={disabled}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Order;
