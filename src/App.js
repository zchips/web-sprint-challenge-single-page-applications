import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Order from "./pizza";
import formSchema from "./pizza/formSchema";
import axios from "axios";
import * as yup from "yup";
import HomePage from "./HomePage";

const initialFormErrors = {
  name: "",
  size: "",
  custom: "",
};

const initialFormValues = {
  name: "",
  size: "",
  custom: "",
  bacon: false,
  sausage: false,
  pepperoni: false,
  peppers: false,
  mushrooms: false,
  pineapple: false,
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() =>
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))
      )
      .catch((error) =>
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error.errors[0] }))
      );
  };

  const postOrder = (newOrder) => {
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        console.log("Order submitted:", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      custom: formValues.custom,
      toppings: [
        "bacon",
        "sausage",
        "pepperoni",
        "peppers",
        "mushrooms",
        "pinneapple",
      ].filter((toppings) => formValues[toppings]),
    };
    postOrder(newOrder);
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <h1>Lambda Za</h1>
      <p>You can remove this code and create your own header or I can not</p>
      <div className="nav-links">
        <Link to="/"> Home</Link>
        <Link to="/pizza" id="pizza-order">
          Order
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/pizza"
          element={
            <Order
              values={formValues}
              disabled={disabled}
              change={inputChange}
              submit={formSubmit}
              errors={formErrors}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
