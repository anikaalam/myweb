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
                I also completed my Bachelor's of Science in Computer Science in May 2018, during which I specilized entrepreneurship in computing. </p>
                
                <p>In the past, I have worked full time as Security Engineer and a few part time jobs in web development, product management and even marketing.</p> 
                
                <p>My primary interests are cybersecurity, machine learning, artificial intelligence and entrepreneurship. I am an eager problem solver with a creative soul. 
                The end goal is be my own boss one day and launch a start up.</p>


            </Content>
        </div>
    );

}

export default AboutPage;