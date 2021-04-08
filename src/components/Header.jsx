import React, { useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components' 
import { Link } from 'react-scroll'
import money from '../images/money.png'
import menu from '../images/menu.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import close from '../images/close.png'
import {Link as LinkR} from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 1000;
    & > #pseudoElem{
        position: absolute;
        width: 0;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: -999;
        background-color: black;
    }
    `;

const Logo = styled.div`
    margin-right:1.5rem;
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    & img{
        width: 5rem;
        height: 5rem;
        filter: invert(100%);
    }
    & > p{
        font-size: 3rem;
        color: white;
        font-weight: bolder;
    }
`

export const StyledLink = styled(Link)`

    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.8rem;
    cursor: pointer;
    ${({ button }) => button && css`
        width: max-content;
        height: 4rem;;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 2rem;
        border-radius: 1rem;
        color: white;
        background-color: #008a00;
    `}
`

const Nav = styled.nav`
    margin: 0px 1.5rem;
    @media screen and (max-width: 768px){
        &{
            display: ${({vertical})=> vertical ? 'inline-block' : 'none'};
        }
    }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
    ${({ vertical }) => vertical ? css`
        align-items: center;
        justify-content: center;
    ` : css`align-items: center;`}
`;

const Li = styled.li`
    display: inline-block;
    list-style: none;
    color: white;
    font-weight: bolder;
    margin: 0px 1.5rem;
    ${({ vertical }) => vertical && css`
        margin: 1rem 0px;
    `}
`
const Menu = styled.div`
    display: none;
    cursor: pointer;
    width: max-content;
    height: max-content;
    & > img{
        width: 4rem;
        height: 4rem;
        filter : invert(100%)
    }
    @media screen and (max-width: 768px){
        &{
            display: inline-block;
        }
    }
`;

const Dropdown = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;
 
const Close = styled.div`
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top: 2rem;
    width: 2rem;
    height: 2rem;
    z-index: 999;
    & > img{
        width: 100%;
        height: 100%;
        filter: invert(100%);
    }
`;

const RouteLink = styled(LinkR)`
    text-decoration: none;
    color: white;
    padding: 0.5rem 2rem;
    background-color: #00be00;
    border-radius: 1.5rem;
    font-size: 1.5rem;
    font-weight: bolder;
`

function Header() {
    const [tl] = useState(gsap.timeline({defaults:{duration: 0.1}}))
    const pseudoElem = useRef(null)
    const [toggle, setToggle] = useState(false)
    const menuIcon = useRef(null)
    const dropdown = useRef(null)
    const closeBtn = useRef(null)

    const handleDropdown = (e) => {
        setToggle(prevToggle => !prevToggle)
    }
    useEffect(() => {
        tl.fromTo(dropdown.current, { xPercent: 100 }, { xPercent: 0 })
        dropdown.current.addEventListener('click', handleDropdown)
    }, [])
    useEffect(() => {
        toggle ? tl.play() : tl.reverse()
    }, [toggle])
    useEffect(() => {
        gsap.to(pseudoElem.current,  {
            width: '100%',
            scrollTrigger: {
                trigger: pseudoElem.current,
                start: 'top top',
                end: `top+=${window.innerHeight} top`,
                scrub: 0.3,
            }
        })
    }, [])

    return (
        <>
        <Wrapper >
            <div ref={pseudoElem} id="pseudoElem"></div>
            <Logo>
                <img src={money} alt="moneyLogo"/>
                <p>dolla</p>
            </Logo>
            <Nav>
                <Ul>
                    <Li><StyledLink smooth to='about'>About</StyledLink></Li>
                    <Li><StyledLink smooth to='discover'>Discover</StyledLink></Li>
                    <Li><StyledLink smooth to='service'>Services</StyledLink></Li>
                    <Li><StyledLink smooth to='signup'>SignUp</StyledLink></Li>
                    <Li><StyledLink smooth to='footer'>Social</StyledLink></Li>
                </Ul>
            </Nav>

            <RouteLink to="/signup">Sign In</RouteLink>
            <Menu ref={menuIcon} onClick={handleDropdown}>
                <img src={menu} alt="MENU"/>
            </Menu>
           
            </Wrapper>
            <Dropdown ref={dropdown}>
                <Close ref={closeBtn}>
                    <img src={close} alt="close"/>
                </Close>
            <Nav vertical>
                <Ul vertical>
                    <Li vertical><StyledLink  smooth to='about'>About</StyledLink></Li>
                    <Li vertical><StyledLink  smooth to='discover'>Discover</StyledLink></Li>
                    <Li vertical><StyledLink  smooth to='service'>Services</StyledLink></Li>
                    <Li vertical><StyledLink smooth to='signup'>SignUp</StyledLink></Li>
                    <Li vertical><StyledLink smooth to='footer'>Social</StyledLink></Li>
                </Ul>
            </Nav>
            </Dropdown>
            </>
    )
}

export default Header
                



