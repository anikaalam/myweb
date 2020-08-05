// App.jsx
 
import React from 'react';
import './App.css';
//4. install react router dom, npm run start
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
//5. install react bootstrap, each individual component  
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Typical from 'react-typical';

//1.convert the App.js component into class base component to use State 
class App extends React.Component{
  //3. constructor state 
  //STATE : state object is where you store property values that belongs to the component
  constructor(props){
    super(props) //super takes in props

    //state for the top level web stuff:
    //Title(nav), links(nav) and state of Home, About, Contact page (state for the titile of the pages, coz we want the titles to manage themselves)

    this.state = {
      title: "Hi, this is Anika",
      //each link array state object will have a title and path link
      headerLinks: [
        {title: "Home", path:"/"},
        {title: "About Me", path:"/about"},
        {title: "Contact", path:"/contact"},
      ],

      //top level info for the 3 main pages 
      home:{
        title: "Hi, I'm Anika",
        subTitle: "I'm a developer",
        text: "Take a look around to see what I've been upto",
      },

      about:{
        title: "About Me"
      },

      contact:{
        title:"Contact Me"
      }
    }
  }
  //2. create a render method inside, wrap around return
  render(){
    return (
      // 4-5..add router, use bootstrap  
      //fluid true, e ntile width of screen

      //6. create Navbar
      //7. Create a toggle and collapsing section, makes more responsive
      <Router>
        <Container className ="p-5" fuild={true} >
          <Navbar className="border-bottom" bg="transparent" variant="light" expand="lg">
            <Navbar.Brand>Fahmida Alam Anika</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id ="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/" >Home<p>   </p></Link>
               
                <Link className="nav-link" to="/about" >About</Link>

                <Link className="nav-link" to="/contact" >Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer/>

        </Container>
         

      </Router>
    );

  }

 //route explained when you are on path render certain component 

  
}
 
export default App;
