import { nanoid } from "nanoid"
import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
        return (
            <button
                type="button"
                onClick={onLeaveFeedback}
                name={option}
                key={nanoid()} >
                {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
    )
    })
}

FeedbackOptions.PropTypes = {
    options:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}