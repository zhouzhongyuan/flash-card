import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

function handleRequestDelete() {
    // Delete this chip
    alert('You clicked the delete button.');
}

function handleTouchTap() {
    // show all questions related to this chip
    alert('You clicked the Chip.');
}
export default class ChipExampleSimple extends React.Component {

    render() {
        return (
            <div style={styles.wrapper}>

                <Chip
                    onRequestDelete={handleRequestDelete}
                    onTouchTap={handleTouchTap}
                    style={styles.chip}
                >
                    React
                </Chip>
            </div>
        );
    }
}