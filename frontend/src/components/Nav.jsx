import React from 'react';

const Nav = ({ childrens }) => {
    
    return (
        <nav className="nav">
            <ul>
                {childrens.map((child) => {
                    return (
                        <li>
                            <a href={child.link}>{child.text}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Nav;