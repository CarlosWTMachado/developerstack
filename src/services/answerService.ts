import * as answers from '../repositories/answerRepository';
export async function createAnswer(answeredBy: string, answer: string, questionId: number){
	await answers.insertOne({answeredBy, answer, questionId});
}

export async function getAnswersByQuestionId(id: number){
	return await answers.findManyByQuestionId(id);
}