import { Answers } from '@prisma/client';

export type CreateAnswerData = Omit<Answers, 'id'>;