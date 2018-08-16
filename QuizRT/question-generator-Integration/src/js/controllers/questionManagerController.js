
import { DomService } from '../services/domService';

const qManService = require('./../services/questionManagerService');

const domService = new DomService();

export class QuestionManagerController {
  initiateWizard(qGenQuery) {
    const url = `/api/questionManager/parseTemplate${qGenQuery}`;
    fetch(url)
      .then((res) => {
        if (res.status && res.status === 200) {
          res.json().then((body) => {
            qManService.processResponseFromTemplateParser(body);
          });
        }
      });
  }

  delegateWizardViewRequest() {
    domService.showWizardContainer();
  }

  callSubjectIdentifier(subject) {
    qManService.determineNodeAndCategory(subject);
  }

  generateQuestions(itemsArray, topicCategory) {
    qManService.generateQuestions(itemsArray, topicCategory);
  }

  delegateSaveOperation() {
    let questions = JSON.parse(window.localStorage.getItem('question_data'));
    qManService.saveQuestions(questions)
  }

  delegateSaveToQEOperation() {
    let questions = JSON.parse(window.localStorage.getItem('questions_data_for_QE'));
    qManService.saveQuestionsShuffledAndChunked(questions, 0, 'https://game-engine-beta.herokuapp.com/api/questions', 'Question Engine');
  }

}
