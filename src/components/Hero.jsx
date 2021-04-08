import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import video from '../video/video.mp4'
import { StyledLink } from './Header'
import { FaChevronRight } from 'react-icons/fa'


const HeroWrapper = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & .intro_video{
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -999;
        width: auto;
        height: auto;
        filter: brightness(70%)
    }
    
    & .banner_cont{
        width: 75%;
        height: max-content;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10rem;
        &  h1{
            font-size: 5rem;
            font-weight: bolder;
            color: white;
            margin: 1.5rem 0px;
            font-family: "Poppins", sans-serif;
        }
        &  p{
            font-size: 1.5rem;
            font-weight: bolder;
            color: #e9e9e9 ;
            margin: 3rem 0px;
            margin-bottom: 5rem;
        }
    }
    @media screen and (max-width: 1024px){
            min-height: 70vh;
        }
    `;

const ArrowLeft = styled(FaChevronRight)`
    font-size: 1.5rem;
`

function Hero() {
    const videoRef = useRef(null)
    useEffect(() => {
        videoRef.current.playbackRate = 3;
    }, [])
    return (
        <HeroWrapper>
            <video ref={videoRef} className="intro_video" src={video} autoPlay loop muted></video>
            <div className="banner_cont">
                <h1>
                    Virtual Banking Made Easy
                </h1>
                <p>Sign Up for new account today and receive $250 in credit towards your next payment</p>
                <StyledLink button><span>Get started</span> <span><ArrowLeft /></span> </StyledLink>
            </div>
        </HeroWrapper>
    )
}

export default Hero
