import React from 'react'   
import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { SocialIcon } from 'react-social-icons';


function ContactPage(props){
    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                <Container fluid={true} >
                    <Row className="p-1 justify-content-center">
                    <h4>  Let's in touch at <a href="anika.contactme@gmail.com">anika.contactme@gmail.com</a></h4> 

                    </Row>
                

                </Container>

                <Container fluid={true}>
                    <Row className="anika-social p-4 justify-content-center">
                        <SocialIcon url="http://twitter.com/famida4" />
                        <SocialIcon url="https://www.instagram.com/famidaanika" />
                        <SocialIcon url="https://www.facebook.com/famida4" />
                        <SocialIcon url="anika.contactme@gmail.com" />
                    </Row>

        </Container>
                
                
                


            </Content>
        </div>
    );
    }
export default ContactPage;