import { createFactory } from 'porm-test-factory';
import { db } from '../../db';

export const userFactory = createFactory(db.user);
