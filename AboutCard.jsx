import React from 'react'
import '../index.css';

const AboutCard = (props) => {
    return (
        <div class="card rounded-2xl">
            <div class="content">
                <div class="imgBx rounded-2xl">
                    {/* "../../pic.JPG" */}
                    <img src={`../../${props.imgurl}`} alt="" />
                </div>
                <div class="contentBx">
                    <h4>{props.name}</h4>
                    <h5>{props.position}</h5>
                </div>
                <div class="sci">
                    <ul>
                        <li> <a href={props.instaram} target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li>  <a href={props.linkedin} target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li>  <a href={props.github} target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutCard