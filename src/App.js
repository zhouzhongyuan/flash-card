import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Card from './component/Card/'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Flash Card</h2>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >

                    <Card
                        title="Card title"
                        questionTitle="什么是关系型数据库？"
                        questionDetail=""
                        answer="TODO"

                    />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
