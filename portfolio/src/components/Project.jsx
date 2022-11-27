import React from 'react';
import '../style/Portfolio.css';

export const Project = ({ url, title, github, description, image }) => {
    return <div className="card py-6" style={{width: '18rem'}}>
        <div className="card-body">
            {/* Need to figure out why images not rendering */}
            <img src={image} className='card-img-top' />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="card-link">Deployed Project</a>
            <a href={github} className="card-link">GitHub Repo</a>
        </div>
    </div>
}