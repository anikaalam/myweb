import React from 'react'   
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//using our Hero component we made 

//pass in the props here for the hero, whatever we pass in the title will sho up on hero title 

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}  />
            <Carousel/> 
            <AboutPage/>
            <ContactPage/>
            

        <div></div>
        <Container fluid={true}>
            <Row className="p-5 justify-content-center">
                <SocialIcon url="http://twitter.com/famida4" />
                <SocialIcon url="https://www.instagram.com/famidaanika" />
                <SocialIcon url="https://www.facebook.com/famida4" />
                <SocialIcon url="anika.contactme@gmail.com" />

                
                

            </Row>

        </Container>

        
            
        </div>   
    );
    

}

export default HomePage;