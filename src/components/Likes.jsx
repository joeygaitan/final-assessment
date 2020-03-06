import React from 'react';

const Likes = ({index,addLike,removeLike}) => {

    function add(e){
        addLike(index)
    }

    function remove(e){
        removeLike(index)
    }

    return ( 
        <div style={{display: "inline-block"}}>
            <button onClick= {(e)=>add(e)} style={{padding:"5px"}}><span role="img">👍</span></button>
            <button onClick = {(e)=>remove(e)} style={{padding:"5px"}}><span role='img'>👎</span></button>
        </div>
     );
}
 
export default Likes;

