import React from 'react'
import sushi from '../sushi.jpg'

export const About = () => {
    return (
        <div>
             <b><p></p></b>
            <h1>Check us out!</h1>
            <p>Good eats is where you can add all of your favorite restaurants.Keep track of the food that you love</p>
            <img src={sushi} alt="sushi" height={500} width={500}/>
            
        </div>
    )
}

export default About
