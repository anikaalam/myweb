import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                <p> Hi there, my name is Anika.</p> 
                
                <p>During this pandemic, I graduated with a Master's in Computer Science, with a focus in Network Security in May 2020.
                I also completed my Bachelor's of Science in Computer Science in May 2018. </p>
                
                <p>I have worked full time as Security Engineer and a few part time jobs in web development, product managament and even marketing.</p> 
                
                <p>My primary interests are cybersecurity, machine learning, artificial intelligence. I am a technical person with a creative soul. 
                The end goal is to eventually be my own boss and start a business.</p>


            </Content>
        </div>
    );

}

export default AboutPage;