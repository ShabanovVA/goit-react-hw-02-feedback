import { nanoid } from "nanoid"

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