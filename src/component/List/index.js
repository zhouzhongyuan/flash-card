import React, { PureComponent } from 'react';
import { List, AutoSizer } from 'react-virtualized';
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
        const { title, detail, answer, chip } = this.state.list[index];
        return (
            <div
                key={key}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Card
                    questionTitle={title}
                    questionDetail={detail}
                    answer={answer}
                    chip={chip}

                />
            </div>
        );
    }
    render() {
        return (
            <div
                style={{
                    flex: 1,
                }}
            >
                <AutoSizer>
                    {
                        ({ height, width }) => (
                            <List
                                height={height}
                                width={width}
                                rowCount={this.state.list.length}
                                rowHeight={200}
                                rowRenderer={this.rowRenderer}
                            />
                        )
                    }

                </AutoSizer>
            </div>
        );
    }
}
