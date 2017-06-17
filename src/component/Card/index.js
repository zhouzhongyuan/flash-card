import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Chip from './Chip';

class CardExampleWithAvatar extends Component {
    static propTypes = {
        questionTitle: PropTypes.string,
        questionDetail: PropTypes.string,
        answer: PropTypes.string,
        chip: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    static defaultProps = {
        questionTitle: '',
        questionDetail: '',
        question: '',
        answer: '',
    };
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false,
        };
        this.handleAnswerToggle = this.handleAnswerToggle.bind(this);
    }
    handleAnswerToggle() {
        this.setState({
            showAnswer: !this.state.showAnswer,
        });
    }
    render() {
        return (
            <Card
                style={{
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <CardTitle
                    title={this.props.questionTitle}
                />
                <Chip
                    value={this.props.chip}
                />
                <CardText
                    style={{
                        display: this.state.showAnswer ? 'none' : null,
                    }}
                >
                    {this.props.questionDetail}
                </CardText>
                <CardText
                    style={{
                        display: this.state.showAnswer ? null : 'none',
                    }}
                >
                    {this.props.answer}
                </CardText>
                <CardActions>
                    <Toggle
                        toggled={this.state.showAnswer}
                        onToggle={this.handleAnswerToggle}
                        labelPosition="right"
                    />
                </CardActions>
            </Card>
        );
    }
}

export default CardExampleWithAvatar;
