import React from 'react'
import styled from 'styled-components'
import {FaChevronRight, FaInstagram, FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'

const FooterWrapper = styled.footer`
    padding: 3rem 5rem;
    background-color:#222;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    font-family : "Dela Gothic One";
    @media screen and (max-width: 768px){
        &{
            grid-template-columns: repeat(1, 1fr);
            grid-row-gap: 2.5rem;
        }
    }
`;

const Ul = styled.ul`
    font-family: inherit;
    font-size: 2rem;
    color: #00c200;
    `

const Li = styled.li`
    list-style: none;
    color: white;
    font-family: inherit;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 1.5rem 0px;
    margin-left: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover{
        color: #00c200;
    }
`;

const Fa_style = {
    fontSize: '2rem',
    marginRight: '1rem'
}


function Footer() {
    return (
        <FooterWrapper id="footer">
            <Ul>
                About Us
                <Li>
                   <FaChevronRight/> How it works
                </Li>
                <Li>
                   <FaChevronRight/> Testimonials
                </Li>
                <Li>
                   <FaChevronRight/> Careers
                </Li>
                <Li>
                  <FaChevronRight/> investor
                </Li>
                <Li>
                   <FaChevronRight/> Terms of service
                </Li>
            </Ul>
            <Ul>
                Contact Us
                <Li>
                   <FaChevronRight/> Contact
                </Li>
                <Li>
                   <FaChevronRight/> Support
                </Li>
                <Li>
                   <FaChevronRight/> Office
                </Li>
                <Li>
                  <FaChevronRight/> Sponsorship
                </Li>
            </Ul>
            <Ul>
                Videos
                <Li>
                   <FaChevronRight/> Submit Video
                </Li>
                <Li>
                   <FaChevronRight/> Ambassadors
                </Li>
                <Li>
                   <FaChevronRight/> Agency
                </Li>
                <Li>
                  <FaChevronRight/> influencer
                </Li>
            </Ul>
            <Ul>
                Social Media
                <Li>
                   <FaInstagram style={Fa_style}/> Instagram
                </Li>
                <Li>
                   <FaFacebook style={Fa_style}/> FaceBook
                </Li>
                <Li>
                   <FaTwitter style={Fa_style}/> Twitter
                </Li>
                <Li>
                    <FaYoutube style={Fa_style}/> Youtube
                </Li>
            </Ul>
        </FooterWrapper>
    )
}

export default Footer
