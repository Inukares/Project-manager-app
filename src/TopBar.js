import React from 'react';
import AppBar from 'material-ui/AppBar';


const TopBar = () => {
    return (
    <AppBar
    className="text-center"
    title="App for the best builders"
    iconClassNameRight="search-button" // dodaj potem, narazie malo wazne
    />
    )
}

export default TopBar;