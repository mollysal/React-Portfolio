import React from 'react';
import { Project } from '../components/Project';
import { projects } from '../utils/projects';

export const PortfolioPage = () => {
    return <section>
        <h1>Recent Projects:</h1>
        {projects.map(project => <Project {...project} />)}
    </section>
}