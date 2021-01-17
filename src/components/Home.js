import React from 'react'
import restaurant from '../restaurant.jpg'

export default function Home() {
    return (
        <div>
           <b><p></p></b>
            <h1>Welcome to Good Eats</h1>
              {/* <b><p></p></b> */}
               <img src={restaurant} alt="restaurant" height={500} width={500}/>
            <p>I LOVE FOOD</p>
        </div>

    )
}
