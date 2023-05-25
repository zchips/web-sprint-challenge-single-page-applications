import React from "react";


function Order(props){
    
    const {change, values, submit, disabled, errors } = props

    const onSubmit = event =>{
        event.preventDefault();
        submit()
    }

    const onChange = event =>{
        const {name, value, type, checked} = event.target
        const pizza = type === 'checkbox' ? checked : value;
        change(name, pizza)
        
    }



    
    return(
        <div>
                    <Order onSubmit={onSubmit} id="pizza-order">
                        <h1> Order Here!</h1> 
                {/* title and then label for the following form with text boxes */}
                                <label>
                    Order For:  <input name="Name" id="name-input" type="text" value={values.name} onChange={onChange}><br></br></input>
                                </label>
                                
                                <label>
                    Pizza Size:     <select name="size" id="size" value={values.size} onChange={onChange} >
                                    <option value=''> Choose your size pizza!</option>
                                    <option value="small"> small 12inch</option>
                                    <option value="medium"> medium 16inch</option>
                                    <option value="large"> large 20inch</option>
                                    </select>                
                                </label>


                                <h2>Toppings</h2>
                                <label>
                                    Bacon <input type="checkbox" name="Bacon" checked={values.bacon} onChange={onChange}/>
                                </label>
                                <label>
                                    Sausage <input type="checkbox" name="Sausage" checked={values.sausage} onChange={onChange}/>
                                </label>
                                <label>
                                   Pepperoni <input type="checkbox" name="Pepperoni" checked={values.pepperoni} onChange={onChange}/>
                                </label>
                                <label>
                                  Peppers  <input type="checkbox" name="Peppers" checked={values.peppers} onChange={onChange}/>
                                </label>
                                <label>
                                   Mushrooms <input type="checkbox" name="Mushrooms" checked={values.mushrooms} onChange={onChange}/>
                                </label>
                                <label>
                                    Pineapple<input type="checkbox" name="Pineapple" checked={values.pineapple} onChange={onChange}/>
                                </label>
                                <label>
                                   Allergies? <input type="text" name="Custom" checked={values.custom} onChange={onChange} id="custom-box" placeholder="Let us know here"/>
                                </label>
                                

                        
                        <div className="errors">
                            <span>{errors.name}</span>
                            <span>{errors.size}</span>
                        </div>

                                    <button id="order-button" disabled={disabled}>Submit</button>
                    </Order>
            
        </div>
    )
}
export default Order