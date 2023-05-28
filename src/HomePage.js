import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    button {
        position: absolute;
        top: 35%;
        left: 75%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: #555;
        color: white;
        font-size: 32px;
        padding: 36px 48px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover {
        background-color: black;
        border: 4px solid #555;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 125vh;
`;

export default function LandingPage(props) {
    const navigate = useNavigate();

    const routeToShop = () => {
        console.log('Submitting something to go to the next page');
        navigate('/pizza');
    };


    // made a small change to the navigate on 38 from '/pizza'
    return (
        <ImgContainer>
            <Img
                onClick={routeToShop}
                src='https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
                id='order-pizza'
            />
            <button
                onClick={routeToShop}
                className='md-button shop-button'
                id='order-pizza'
            >
                Order Now!
            </button>
        </ImgContainer>
    );
}
