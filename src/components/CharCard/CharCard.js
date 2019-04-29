import React from 'react';
//import ReactDOM from 'react-dom';
import "./CharCard.css";





//setup Cahracter components

const CharCard = props => (
    <div className="block-example border border-0 border-dark" >
    {/* <div className="img-container"> */}
           <a href='https://github.com/SantiiMari/Game-of-Clicky'><img className="rounded-circle"alt="bobby" src={require('../../images/bobby.jpeg')} /></a> 
           {/* <a href=''> <img className="rounded-circle"alt="pupp" src={require('../../images/pupp.jpeg')} /></a>  */}
           <a href='https://github.com/Kclaster/todo'> <img className="rounded-circle"alt="todo" src={require('../../images/todo.png')} /></a> 
           <a href='https://github.com/SantiiMari/GemGame'> <img className="rounded-circle"alt="gem" src={require('../../images/gem.png')} /></a> 
           <a href='https://github.com/SantiiMari/Psychic-game'> <img className="rounded-circle"alt="smaug" src={require('../../images/smaug.jpg')} /></a> 
        {/* </div> */}
    </div>
);

export default CharCard;
