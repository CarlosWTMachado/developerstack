import * as questions from '../repositories/questionRepository';
export async function createQuestion(askedBy: string, question: string){
	await questions.insertOne({askedBy, question});
}

export async function getQuestions(){
	return await questions.findMany();
}

export async function getQuestionById(id: number){
	return await questions.findUniqueById(id);
}

export async function getQuestionByIdWithAnswers(id: number){
	return await questions.findUniqueByIdWithAnswers(id);
}