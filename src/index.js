import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car';



ReactDOM.render(

    <div>
    <Car color="Red" doors="5"/>
    <Car color="Green" doors="4"/>
    <Car doors="2"/>
    </div>,

    document.getElementById('root')
);