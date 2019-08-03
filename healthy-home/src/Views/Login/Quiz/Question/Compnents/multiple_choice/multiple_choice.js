import React from 'react'

export default function multiple_choice(props) {
    const answers = props.answers.map((e) => {
        return (
            <div>
                <input type="radio" name={`Question_${e.registration_question_table_id}`} onChange={()=>{alert("")}} />
                {e.answer}
            </div>
        )
    })
    return (
        <div>
           {answers}
        </div>
    )
}
