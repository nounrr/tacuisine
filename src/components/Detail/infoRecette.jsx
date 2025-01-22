import React from 'react';
 export default function Infos(props){
    return(
        <>
        <h2>{props.title}</h2>
        <span className='Type'>{props.type} • {props.duration}</span>
        <div className="card-author">
              <img
                className="author-image"
                src={props.authorImage}
                alt={props.owner}
              />
              <h2 className="author-name">{props.owner}</h2>
            </div>
            <hr/>
        </>
    )
 }