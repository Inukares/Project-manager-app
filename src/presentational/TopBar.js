import React from 'react';
import AppBar from 'material-ui/AppBar';

const style={textAlign:'center'}

const TopBar = () => {
    return (
    <AppBar
    style={style}
    title="Manage your projects easily"
    showMenuIconButton={false}
    iconClassNameRight="search-button"
    />
    )
}

export default TopBar;