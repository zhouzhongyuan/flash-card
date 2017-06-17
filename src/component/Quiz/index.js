import React, { PureComponent } from 'react';
import config from '../../../config';
import Card from '../Card';

export default class Quiz extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            question: [],
        };
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
        // TODO 随机ID
        const id = '5933f182e0bbdc76dbf44548';
        fetch(`${config.server}questions/${id}`, fetchConfig)
            .then(response => response.json())
            .then((bodyJson) => {
                this.setState({
                    question: bodyJson,
                });
            });
    }
    render() {
        const { title, detail, answer, chip } = this.state.question;
        return (
            <div
                style={{
                    flex: 1,
                }}
            >
                <div
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
                        chip={chip || []}
                    />
                </div>
            </div>
        );
    }
}
