import React from 'react';

export const Project = ({ url, title, github, description }) => {
    return <div className="card py-6" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="card-link">Deployed Project</a>
            <a href={github} className="card-link">GitHub Repo</a>
        </div>
    </div>
}