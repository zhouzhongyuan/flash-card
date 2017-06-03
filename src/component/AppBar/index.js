import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class AppTopBar extends Component {
    constructor(props) {
        super(props);
        this.handleDrawerNav = this.handleDrawerNav.bind(this);
    }
    handleDrawerNav() {
        console.log('show drawer nav');
    }
    render() {
        return (
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.handleDrawerNav}
            />
        );
    }
}
export default AppTopBar;
