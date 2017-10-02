import React from 'react';
import AppBar from 'material-ui/AppBar';

const TopBar = () => {
    return (
    <AppBar
    className="text-center"
    title="Project Manager App"
    showMenuIconButton={false}
    iconElementRight={<div></div>}
    />
    )
}

export default TopBar;