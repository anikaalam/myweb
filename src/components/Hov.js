import React from 'react';
import github from '../assets/github.png';
import resume from '../assets/resume.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardInfo from '../components/CardInfo';



class Hov extends Component {
    constructor(props) {
      super(props);
      this.state = {hovered: false};
    }
  
    render() {
      return (
        <Image
          src={this.props.data.github}
          alt={this.props.data.name}
          size="massive"
          avatar
          onClick={() => this.props.handleGallery(this.props.data.username)}
          onMouseOut={() => this.setState({hovered: true})}
          onMouseOver={() => this.setState({hovered: false})}
          style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : null}`}}
        />
      );
    }
  }
  
  class MyOtherComponent extends Component {
    ....
  
    render() {
      return (
        ...
        <Hov data={...}/>
      );
    }
  }

  






export default Hov;