import React from 'react'
import styled from 'styled-components'
import { StyledLink } from './Header'

const SectionWrapper = styled.section`
    position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    flex-wrap : wrap;
    padding: 10rem 3rem;
    align-items: center;
    background-color: ${({blackTheme}) => blackTheme ? '#000000' :  'white'} ;
    justify-content: space-around;
    & >.section__illustration{
        width: max-content;
        margin: 0px 3rem;
        & img{
            width: 35rem;
            height: 35rem;
            @media screen and (max-width: 280px){
                width: 30rem;
                height: 30rem;
            }
        }
    }
    & >.section__info{
        width: 40rem;
        height: max-content;
        font-family : "Dela Gothic One";
        margin-right: 2rem;

        @media screen and (max-width: 768px){
            &{
                margin-bottom: 4rem;
            }
        }
    }
`
const H_one = styled.h1`
    color: ${({blackTheme}) => blackTheme ? '#000000' :  'white'};
    font-size: 3.5rem;
    margin-bottom: 2rem;
    font-family: inherit;
`
const Span = styled.span`
    display: inline-block;
    color: #00d800;
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    font-family: inherit;
`
const Div = styled.div`
`
const P = styled.div`
    color: ${({blackTheme}) => blackTheme ? '#000000' :  'white'};
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    font-family: inherit;
`
function Section({section, inverse, id}) {
    return (
        <>
            {inverse ?
                <SectionWrapper id={id}>
                    <Div className="section__illustration">
                        <img src={section.svg} alt="SVG" />
                    </Div>
                    <Div className="section__info">
                        <Span className="section__text">{section.span}</Span>
                        <H_one blackTheme className="section__title">{section.title}</H_one>
                        <P blackTheme>{section.p}</P>
                        <StyledLink button>{section.btn}</StyledLink>
                    </Div>
                </SectionWrapper >
                : <SectionWrapper blackTheme id={id}>
                    <div className="section__info">
                        <Span className="section__text">{section.span}</Span>
                        <H_one  className="section__title">{section.title}</H_one>
                        <P >{section.p}</P>
                        <StyledLink button>{section.btn}</StyledLink>
                    </div>
                    <div className="section__illustration">
                        <img src={section.svg} alt="SVG" />
                    </div>
                </SectionWrapper>}
        </>
    )
}

export default Section
