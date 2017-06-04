import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
    margin: 12,
};
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionTitle: '',
            questionDetail: '',
            questionChip: '',
            answer: '',
        };
        this.handleDrawerNav = this.handleDrawerNav.bind(this);
        this.changeQuestionTitle = this.changeQuestionTitle.bind(this);
        this.changeQuestionDetail = this.changeQuestionDetail.bind(this);
        this.changeQuestionChip = this.changeQuestionChip.bind(this);
        this.changeAnswer = this.changeAnswer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDrawerNav() {
        console.log('show drawer nav');
    }

    changeQuestionTitle(event, newValue) {
        this.setState({
            questionTitle: newValue,
        });
    }

    changeQuestionDetail(event, newValue) {
        this.setState({
            questionDetail: newValue,
        });
    }

    changeQuestionChip(event, newValue) {
        this.setState({
            questionChip: newValue,
        });
    }

    changeAnswer(event, newValue) {
        this.setState({
            answer: newValue,
        });
    }

    handleSubmit() {
        const payload = {
            title: this.state.questionTitle,
            detail: this.state.questionDetail,
            chip: [this.state.questionChip],
            answer: this.state.answer,
        };
        const myInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(payload),
        };

        fetch('http://127.0.0.1:8081/api/questions', myInit)
            .then(response => response.blob())
            .then((myBlob) => {
                console.log(myBlob);
            });
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Question Title"
                    value={this.state.questionTitle}
                    onChange={this.changeQuestionTitle}
                /><br />
                <TextField
                    hintText="Question Detail"
                    value={this.state.questionDetail}
                    onChange={this.changeQuestionDetail}
                /><br />
                <TextField
                    hintText="Chips"
                    value={this.state.questionChip}
                    onChange={this.changeQuestionChip}
                /><br />
                <br />
                <TextField
                    hintText="Answer"
                    value={this.state.answer}
                    onChange={this.changeAnswer}
                    fullWidth
                />
                <RaisedButton
                    label="Submit"
                    primary
                    style={style}
                    onTouchTap={this.handleSubmit}
                />
            </div>
        );
    }
}
export default Add;

