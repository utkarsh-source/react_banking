import React from 'react'
import styled from 'styled-components'
import svg1 from '../images/svg1.svg'
import svg2 from '../images/svg2.svg'
import svg3 from '../images/svg3.svg'
import service1 from '../images/service1.svg'

const ServiceWrapper = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const CardBox = styled.div`
    position: relative;
    height: 100%;
    width: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
    grid-row-gap: 2rem;
    padding: 6rem 4rem; 
    background-color: black;
    border-top-right-radius:  5rem;
    border-bottom-right-radius:  5rem;
    justify-items: center;
    @media screen and (max-width: 768px){
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto;
    }
    &::before{
        position: absolute;
        content: '';
        width: 10rem;
        height: 5rem;
        border-radius: 50%;
        background-color: white;
        top: -2.5rem;
        left: 50%;
        transform: translateX(-50%)
    }
    `
const Card = styled.div`
    position: relative;
    width: 22rem;
    height: max-content;
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family : "Dela Gothic One";
    background-color: white;
    
    &:last-child{
        grid-area: 2 / 1 / span 1 / span 2;
        @media screen and (max-width: 440px){
            grid-area: auto;
    }
        justify-self: center;
    }
    & img{
        width: 15rem;
        height: 10rem;
        margin-bottom: 1.5rem;
    }
    & h2{
        color: black;
        font-size: 1.56rem;
        font-family: inherit;
        margin-bottom: 1rem;
    }
    & p{
        color: #000000;
        font-size: 1.6rem;
        font-weight: 500; 
    }
    `
const Title = styled.h1`
    font-size: 4rem;
    color: black;
    font-weight: bold;
    `
const Div = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    & > .mainSvg{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 768px){
            display: none;
        }
        & img{
            width: 40rem;
            height: 40rem;
        }
        padding: 2rem 4rem;
    }

`


function Services() {
    return (
        <ServiceWrapper id="service">
            <Title><span>Our</span> <span>Services</span></Title>
            <Div>
                <CardBox>
                    <Card>
                        <img src={svg1} alt="SVG" />
                        <h2>Reduce Expenses</h2>
                        <p>We help reduce your fees and increase your overall revenue.</p>
                    </Card>
                    <Card>
                        <img src={svg2} alt="SVG" />
                        <h2>Virtual Offices</h2>
                        <p>You can access our platform online anywhere in the world.</p>
                    </Card>
                    <Card>
                        <img src={svg3} alt="SVG" />
                        <h2>Premium Benifits</h2>
                        <p>Unlock our special membership card that return 5% cash back.</p>
                    </Card>
                </CardBox>
                <div className="mainSvg">
                    <img src={service1} alt="SVG"/>
                </div>
            </Div>
        </ServiceWrapper>
    )
}

export default Services
