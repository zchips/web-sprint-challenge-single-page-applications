import React from "react";

function Order(props) {
  const { change, values, submit, errors } = props;

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
    
      <form onSubmit={onSubmit} id="pizza-form">
        <h1>Order Here!</h1>
        
        <div className="form-group">
          <label >Order For:</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={values.name}
            onChange={onChange}
            placeholder="name"
          />
        </div>

        <div className="form-group">
          <label>Pizza Size:</label>
          <select
            name="size"
            id="size-dropdown"
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
        <label>Sausage
                <input
                    name='sausage'
                    type='checkbox'
                    checked={values.sausage}
                    onChange={onChange}
                />
        </label>
        </div>

                <div className="form-group">

                <label>Bacon
                      <input
                          name='bacon'
                          type='checkbox'
                          checked={values.bacon}
                          onChange={onChange}
                      />
                </label>
                </div>

                <div className="form-group">

                <label>Pepperoni
                      <input
                          name='pepperoni'
                          type='checkbox'
                          checked={values.pepperoni}
                          onChange={onChange}
                      />
                </label>
                </div>


                <div className="form-group">

                <label>Peppers
                      <input
                          name='peppers'
                          type='checkbox'
                          checked={values.peppers}
                          onChange={onChange}
                      />
                </label>
                </div>

                <div className="form-group">

                <label>Mushrooms
                      <input
                          name='mushrooms'
                          type='checkbox'
                          checked={values.mushrooms}
                          onChange={onChange}
                      />
                </label>
                </div>
                <div className="form-group">

                <label>pineapple
                      <input
                          name='pineapple'
                          type='checkbox'
                          checked={values.pineapple}
                          onChange={onChange}
                      />
                </label>
                </div>

        <div className="form-group">
          <label id="special-text">Allergies?</label>
          <input
            type="text"
            name="custom"
            defaultValue={values.custom}
            onChange={onChange}
            id="special-text"
            value={values.instructions}
            placeholder="Here are the special instructions"
          />
        </div>

        <div className="errors">
          <span>{errors.name}</span>
          <span>{errors.size}</span>
        </div>

        <button
          type="submit"
          id="order-button"

          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    
  );
}

export default Order;