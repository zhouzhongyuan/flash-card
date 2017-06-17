import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, DrawerNav } from './component';
import './App.css';

export default class App extends PureComponent {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };
    render() {
        return (
            <MuiThemeProvider>
                <div
                    className="App"
                    style={{
                        justifyContent: 'start',
                    }}
                >
                    <AppBar />
                    <DrawerNav />
                    <div
                        style={{
                            position: 'relative',
                            left: 256,
                        }}
                    >
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
