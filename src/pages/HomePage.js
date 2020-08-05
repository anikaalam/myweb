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
import profilepic from '../assets/profilepic.jpg';
import Image from 'react-image-resizer';

//using our Hero component we made 

//pass in the props here for the hero, whatever we pass in the title will sho up on hero title 
//<img src={profilepic} className="pic-logo" alt="logo" 
  //          height={350}
    //        width={700} />
function HomePage(props){
    return(
        <div>
            <div>
                <img src={profilepic} className="pic-logo pic-center" alt="logo" />
            </div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}  />

            <Carousel/> 
            
            <ContactPage/>
            


        
            
        </div>   
    );
    

}

export default HomePage;