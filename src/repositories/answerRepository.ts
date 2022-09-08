import prisma from '../config/database';
import { CreateAnswerData } from '../types/answerTypes';

export async function insertOne(answer: CreateAnswerData) {
	await prisma.answers.create({
		data: answer
	})
}

export async function findManyByQuestionId(questionId: number) {
	return await prisma.answers.findMany({where: { questionId }})
}