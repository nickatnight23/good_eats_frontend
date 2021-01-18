import React from 'react'
import sushi from '../sushi.jpg'

export const About = () => {
    return (
        <div>
             <b><p></p></b>
            <h1>All About the Food</h1>
            <p>Good eats is where you can add all of your favorite restaurants. Keep track of food places that you really enjoyed!</p>
            <img src={sushi} alt="sushi" height={500} width={500}/>
            
        </div>
    )
}

export default About
