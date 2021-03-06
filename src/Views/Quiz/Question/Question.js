import React, { Component } from 'react'
import SelectAllApply from './Compnents/select_all_apply/select_all_apply'
import MultipleChoice from './Compnents/multiple_choice/multiple_choice'
import './Question.css'

class Question extends Component {
    render() { 
        let answers = ""
        if(this.props.question.question_type_id === 1) {
            answers = <MultipleChoice handleAnswer= {(e, answer) => {this.props.handleAnswer(e, this.props.question.reg_question_id, this.props.question.question_type_id, answer)}} answers = {this.props.question.answers[0]}/>
        } else if (this.props.question.question_type_id === 2){
             answers = <SelectAllApply handleAnswer= {(e, answer) => {this.props.handleAnswer(e, this.props.question.reg_question_id, this.props.question.question_type_id, answer)}} answers = {this.props.question.answers[0]}/>
        }
        return (
            <div className="question">
                <h1>{this.props.question.reg_question}</h1>
                {answers}
            </div>
        )
    }
}

export default Question