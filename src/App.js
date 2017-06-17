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
                    <div
                        style={{
                            flex: 1,
                            marginLeft: 256,
                            display: 'flex',
                        }}
                    >
                        {this.props.children}
                    </div>
                    <DrawerNav />
                </div>
            </MuiThemeProvider>
        );
    }
}
