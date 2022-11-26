import React from 'react';

// Our Header has the child: Nav
export const Header = ({ children }) => {
    return <header>
        {children}
    </header>
}