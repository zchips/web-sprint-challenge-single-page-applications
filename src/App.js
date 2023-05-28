import React, { useState, useEffect } from "react";
import "./App.css"
import { Route, Link, Routes } from "react-router-dom";
import Order from "./pizza";
import Confirmation from "./pizza/Confirmation";
import formSchema from "./pizza/formSchema";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import HomePage from "./HomePage";


const blankOrder = []
const initialDisabled = true;
const initialFormErrors = {
  name: '',
  size: '',
  custom: ''
}


const initialFormValues = {
  name: '',
  size:'',
  custom: '',
  bacon: false,
  sausage: false,
  pepperoni: false,
  peppers: false,
  mushrooms: false,
  pineapple: false,
}


const App = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(blankOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const confirmation = () => {
    navigate('/pizza/confirmation');
  }
  const validate = (name, value) =>{
    yup.reach(formSchema, name).validate(value).then(()=> setFormErrors({...formErrors, [name]:''})).catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}));
  }
  

  const postOrder = newOrder => {
    axios.post(`https://reqres.in/api/orders`, newOrder).then(res => {setOrder([res.data, ...order])}).catch(error=>{console.log(error)}).finally(()=>{
      setFormValues(initialFormValues);
      confirmation();
    });
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormErrors({...formValues, [name]: value});
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      custom: formValues.custom,
      toppings: ['bacon', 'sausage', 'pepperoni', 'peppers', 'mushrooms', 'pinneapple']
      .filter(toppings =>formValues[toppings])
    }
    postOrder(newOrder);
  }

  useEffect(()=> {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <h1>Lambda Za</h1>
      <p>You can remove this code and create your own header or I can not</p>
      <div className="nav-links">
        <Link to='/'> Home</Link>
        <Link to='/pizza' id='pizza-order'> Order</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza/confirmation" element={<Confirmation />} />
        <Route path="/pizza" element={<Order values={formValues} disabled={disabled} change={inputChange} submit={formSubmit} errors={formErrors} />} />
      </Routes>
    </div>
  );
};

export default App
