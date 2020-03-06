import React from 'react';
import Likes from './Likes'

const Band = ({bands, likes, addLike, removeLike}) => {
    return ( 
        <div>
            {bands.map((band,index)=>{
                return (
                    <div style={{backgroundColor:"black",color:"white",padding:"20px"}}>
                        <ul>
                            <li>Band Name: {band.band_name}</li>
                            <li>Year formed: {band.formed}</li>
                            <li>Band's Origin Country: {band.origin}</li>
                            <li>Band's fan count: {band.fans}</li>
                            { band.split !== "-" ? <li>Band split: {band.split}</li> : ''}
                        </ul>
                        { band.split !== "-" ? <div> Likes: {likes[index]}
                            <Likes index = {index} addLike={addLike} removeLike={removeLike}/>
                        </div>: ''}
                        
                    </div>
                );
            })}
        </div>
     );
}
 
export default Band;