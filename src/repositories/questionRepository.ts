import prisma from '../config/database';
import { Questions } from '@prisma/client';
import { CreateQuestionData } from '../types/questionTypes';

export async function insertOne(question: CreateQuestionData) {
	await prisma.questions.create({
		data: question
	})
}

export async function findMany(){
	return await prisma.questions.findMany();
}

export async function findUniqueById(id: number){
	return await prisma.questions.findUnique({where: { id }});
}

export async function findUniqueByIdWithAnswers(id: number){
	return await prisma.questions.findUnique({
		where: { id },
		include: {
			answers: {
				select: {
					answeredBy: true,
					answer: true
				}
			}
		},
	});
}