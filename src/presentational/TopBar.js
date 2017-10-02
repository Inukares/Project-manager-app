import React from 'react';
import AppBar from 'material-ui/AppBar';

//const style={textAlign:'center'}

const TopBar = () => {
    return (
    <AppBar
    //style={style}
    className="text-center"
    title="Project Manager App"
    showMenuIconButton={false}
    iconElementRight={<div></div>}
   // iconClassNameRight="search-button"
    />
    )
}

export default TopBar;