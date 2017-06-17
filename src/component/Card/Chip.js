import React from 'react';
import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types';

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
    static propTypes = {
        value: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    render() {
        return (
            <div style={styles.wrapper}>
                {
                    this.props.value.map((item, index) => {
                        if (!item) {
                            return;
                        }
                        return (
                            <Chip
                                onRequestDelete={handleRequestDelete}
                                onTouchTap={handleTouchTap}
                                style={styles.chip}
                            >
                                {item}
                            </Chip>
                        );
                    })
                }
            </div>
        );
    }
}
