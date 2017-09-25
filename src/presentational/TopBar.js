import React from 'react';
import AppBar from 'material-ui/AppBar';

const TopBar = () => {
    return (
    <AppBar
    className="text-center"
    title="App for the best builders"
    showMenuIconButton={false}
    iconClassNameRight="search-button"
    />
    )
}

export default TopBar;