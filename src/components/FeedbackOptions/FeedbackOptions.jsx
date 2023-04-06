import { nanoid } from "nanoid"
import PropTypes from 'prop-types'
import { ButtonFeedback } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
        return (
            <ButtonFeedback
                type="button"
                onClick={onLeaveFeedback}
                name={option}
                key={nanoid()} >
                {option.charAt(0).toUpperCase() + option.slice(1)}
            </ButtonFeedback>
    )
    })
}

FeedbackOptions.protoTypes = {
    options:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}