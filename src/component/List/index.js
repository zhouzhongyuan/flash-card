import React, { PureComponent } from 'react';
import { List } from 'react-virtualized';
import config from '../../../config';
import Card from '../Card';

export default class ListComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.rowRenderer = this.rowRenderer.bind(this);
    }

    componentDidMount() {
        const fetchConfig = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            cache: 'default',
        };
        fetch(`${config.server}questions`, fetchConfig)
            .then(response => response.json())
            .then((bodyJson) => {
                this.setState({
                    list: bodyJson,
                });
            });
    }
    rowRenderer(
        {
            key,         // Unique key within array of rows
            index,       // Index of row within collection
        }) {
        const { title, detail, answer } = this.state.list[index];
        return (
            <div
                key={key}
            >
                <Card
                    questionTitle={title}
                    questionDetail={detail}
                    answer={answer}

                />
            </div>
        );
    }
    render() {
        return (
            <div
                style={{
                    backgroundColor: 'red',
                }}
            >
                <List
                    width={600}
                    height={600}
                    rowCount={this.state.list.length}
                    rowHeight={200}
                    rowRenderer={this.rowRenderer}
                />
            </div>
        );
    }
}
