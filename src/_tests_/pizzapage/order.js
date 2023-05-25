import React from "react";


function Order(props){
    
    
    return(
        <div>
                    <Order>
                        <h1> Order Here!</h1> 
                {/* title and then label for the following form with text boxes */}
                                <label>
                    Order For: <input name="Name" id="name-id" type="text" value={values.name}><br></br></input>
                                </label>
                                <label>
                    Pizza Size                
                                </label>
                    </Order>
            
        </div>
    )
}
export default Order