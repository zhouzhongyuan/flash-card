import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

const styles = {
    linkStyle: {
        display: 'inline-block',
        width: '100%',
        height: '100%',
    },
};
export default class DrawerNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}
                />
                <Drawer open>
                    <AppBar
                        title="Flash Card"
                        iconElementLeft={<div />}
                    />
                    <MenuItem><Link style={styles.linkStyle} to="/list">List</Link></MenuItem>
                    <MenuItem><Link style={styles.linkStyle} to="/quiz">Quiz</Link></MenuItem>
                    <MenuItem><Link style={styles.linkStyle} to="/add">Add</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}
