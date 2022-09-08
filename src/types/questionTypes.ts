import { Questions } from '@prisma/client';

export type CreateQuestionData = Omit<Questions, 'id'>;