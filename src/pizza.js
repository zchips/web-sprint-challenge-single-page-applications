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

  // Determine the validation status based on the form values
  const isFormValid = values.name !== "" && values.size !== "";

  return (
    <div className="container">
      <form onSubmit={onSubmit} id="pizza-form">
        <h1>Order Here!</h1>
        
        <div className="form-group">
          <label id="name-input">Order For:</label>
          <input
            type="text"
            name="name"
            id="name-input"
            defaultValue={values.name}
            onChange={onChange}
            placeholder="name"
          />
        </div>

        <div className="form-group">
          <label id="size-dropdown">Pizza Size:</label>
          <select
            name="size"
            id="size"
            defaultValue={values.size}
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
                defaultChecked={values[topping]}
                onChange={onChange}
              />
            </label>
          ))}
        </div>

        <div className="form-group">
          <label id="special-text">Allergies?</label>
          <input
            type="text"
            name="custom"
            defaultValue={values.custom}
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
          submit={!isFormValid} // Update the disabled attribute
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Order;
