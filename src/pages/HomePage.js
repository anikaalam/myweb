import React from 'react'   
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

//using our Hero component we made 

//pass in the props here for the hero, whatever we pass in the title will sho up on hero title 

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}  />
            <Carousel/> 
        </div>   
    );

}

export default HomePage;