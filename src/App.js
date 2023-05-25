import React, {useState, useEffect } from "react";
import "./App.css"
import {Router, Link, Switch} from "react-router-dom";
import Order from "./pizzapage/order";
import Confirmation from "./pizzapage/Confirmation";
import formSchema from "./pizzapage/formSchema";
import axios from 'axios';
import{ useHistory } from 'react-router-dom'
import * as yup from 'yup'
import LandingPage from "./pizzapage/LandingPage";


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
  const history = useHistory()
  const [order, setOrder] = useState(blankOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const confirmation = () => {
    history.push('/pizzapage/confirmation')
  }
  
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
