import React from 'react';
import '../style/AboutPage.css';
import MollyImg from '../images/MollySalPhoto.jpg'

export const AboutPage = () => {
    return <div className='container about'>
        <div className="pt-4 heading_about">
            <h5>Get to know me!</h5>
        </div>
        <hr/>
        <div className='row pt-4 container about_container'>
            <div className="col justify-content-center align-self-center about_me">
                <div className='about_me-image'>
                    <img src={MollyImg} className='img-fluid' alt="Molly Salmonsen Profile Image" />
                </div>
            </div>
            {/* <div className='col-sm'>

            </div> */}


            <div className="col container-sm about-content">
                <p>
                    Hello! My name is Molly Salmonsen! I have a B.S. in Civil Engineering from Penn State. Currently I'm learning how to code, in hopes of developing some add-ins for Autodesk Revit. I love all things 3D & BIM (Building Information Modeling).
                    <br/>
                    <br/>
                    In my free time I enjoy taking photos for family and friends. I'm getting married in June to my best friend, Josh. We have a cute Labradoodle, Banner. He's named after Bruce Banner the Incredible Hulk.
                </p>
            </div>
        </div>
    </div>
}