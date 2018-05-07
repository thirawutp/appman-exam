import React from 'react';

const Logo = ({logo, cssName}) => (
    <img className={`logo ${cssName}`} src={logo} alt='logo'/>
)

export default Logo;
