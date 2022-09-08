import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
	const {askedBy, question} = req.body;

	await questionService.createQuestion(askedBy, question);

	res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
	const {answeredBy, answer} = req.body;
	const {id} = req.params;

	await answerService.createAnswer(answeredBy, answer, Number(id));

	res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
	const questions = await questionService.getQuestions();

	res.status(200).send({questions});
}

export async function getById(req: Request, res: Response) {
	const {id} = req.params;

	// const question = await questionService.getQuestionById(Number(id));
	// const answers = await answerService.getAnswersByQuestionId(Number(id));
	// const response = {...question, answers: answers.map((value) => {return {answeredBy: value.answeredBy, answer: value.answer}})};

	const questions = await questionService.getQuestionByIdWithAnswers(Number(id));

	res.status(200).send(questions);
}
