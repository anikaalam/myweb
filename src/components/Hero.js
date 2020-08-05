import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Typical from 'react-typical';

//{ props.text && <h7 className="lead font-weight-light" > {props.text}</h7>} 
function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-1">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={8}>
                        { props.title && <h1 className=" font-weight-bolder">{props.title}</h1>}
                        { props.subTitle && <h3 className="dispay-4 font-weight-light">
                        { props.subTitle}  
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'developer',
                                    1000,
                                    'cybersecurity enthusiast',
                                    1000,
                                    'self-proclaimed philosopher',
                                    1000,
                                    'lifelong learner',
                                    1000
                                ]} 
                             /></h3>}



                             
                             
                        
                            
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;

