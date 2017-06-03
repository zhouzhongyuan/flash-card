import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class DrawerNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <AppBar
                        title="Flash Card"
                        iconElementLeft={<div />}
                    />
                    <MenuItem>Lists</MenuItem>
                    <MenuItem>Quiz</MenuItem>
                    <MenuItem>Add</MenuItem>
                </Drawer>
            </div>
        );
    }
}
export default DrawerNav;
