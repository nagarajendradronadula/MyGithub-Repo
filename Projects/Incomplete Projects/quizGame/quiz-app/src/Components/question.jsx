/* eslint-disable react/prop-types */

const question = (question, onAnswerClick) => {
  return (
    <div>
        <h2>{question.question}</h2>
        <ul className="options">
            {question.answerOptions.map((option) => {
                return <li key={option.option}>
                    <button onClick = {() => onAnswerClick(option.isCorrect)}>{option.text}</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default question