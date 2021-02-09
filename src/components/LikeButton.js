import React,{useState} from 'react'


 function LikeButton() {

    const[likes, setLikes]= useState(0);

    const myArray = [1,2,3,4]

    // declare 4 variables, a, b, c, and d, and use array destructuring to assign them to the coreesponding array valuse in myArray



    return (
        <div>
            <p>Liked {likes}</p>
            <button onClick={()=> setLikes(likes +1)}>like button</button>
        </div>
    )
}

export default LikeButton