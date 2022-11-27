import React from 'react';
import { Project } from '../components/Project';
import { projects } from '../utils/projects';
import '../style/Portfolio.css';

export const PortfolioPage = () => {
    return <section>
        <h1>Recent Projects:</h1>
        <div className='container projects'>
            {projects.map(project => <Project {...project} />)}
        </div>
    </section>
}