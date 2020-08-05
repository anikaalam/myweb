import React from 'react';
import github from '../assets/github.png';
import resume from '../assets/resume.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardInfo from '../components/CardInfo';


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Github',
                    subTitle: 'Few projects, more on the way!',
                    image: github,
                    link: 'https://github.com/anikaalam?tab=repositories',
                    selected: false 

                },
                {
                    id: 1,
                    title: 'Resume',
                    subTitle: 'Education and work history',
                    image: resume,
                    link: 'https://github.com/anikaalam/resume/blob/master/website_resume.pdf',
                    selected: false 

                },
            ]

        }
    }

    handleCardClick = (id, card) => {
    

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around anika-carousel my-class">
                {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
} 

export default Carousel;