import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props){
    return(
        <div className="d-inline-block anika-card" onClick={(e) => props.click(props.item)}>
            <img className="anika-card-image my-class" src={props.item.image} alt ={props.item.image}/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
    );
}

export default Card;