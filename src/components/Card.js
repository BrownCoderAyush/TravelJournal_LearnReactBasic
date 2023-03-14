import React from "react";
import '../css/card.scss';
function Card(props) {
    console.log(props);
    return (

        <div className="blog-wrapper">

            <div className="blog-card">

                <div className="card-img">
              {props.isAborad ?<div className="card--free">Abroad</div>:<div></div>}
                <span></span>
                <img src={props.img}/>
                    <h1>{props.title}</h1>
                </div>
                <div className="card-details"><span><i className="fa fa-calendar"></i>{props.date}</span><span><i className="fa fa-heart"></i>{props.JournalNumber}</span></div>
                <div className="card-text"><p>{props.details}</p></div>
                <div className="read-more">Read More</div>
            </div>      
        </div>


    )

}

export default Card;