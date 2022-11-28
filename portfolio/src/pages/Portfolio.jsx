import React from 'react';
import { Project } from '../components/Project';
import { projects } from '../utils/projects';
import '../style/Portfolio.css';

// Issue with Images Rendering - Need to fix
export const PortfolioPage = () => {
    return <section>
        <div className='portfolioHeading'>
            <h1>Recent Projects:</h1>
        </div>
        <hr />

        <div className='container projects mt-5'>
            {projects.map(project => <Project {...project} />)}
        </div>
    </section>
}