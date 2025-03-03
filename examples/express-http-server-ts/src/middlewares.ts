import * as store from '@leapfrogtechnology/async-store';
import { Request, Response, NextFunction } from 'express';

import * as logger from './logger';
import { doSomething } from './service';

/**
 * Middleware to set query params `a` and `b` on async-store.
 *
 * @returns {(req, res, next) => void}
 */
export function requestParams() {
  return (req: Request, res: Response, next: NextFunction) => {
    const a = req.query.a;
    const b = req.query.b;

    store.set({ a, b });

    logger.debug(`Received a: ${a}`);
    logger.debug(`Received b: ${b}`);

    next();
  };
}

/**
 * Middleware to add the parameters `a` and `b` and set `sum` on the async store.
 *
 * @returns {(req, res, next) => void}
 */
export function add() {
  return (req: Request, res: Response, next: NextFunction) => {
    doSomething();

    const a = store.get('a');
    const b = store.get('b');

    const sum = a + b;

    store.set({ sum });
    logger.debug(`Calculated sum: ${sum}`);

    next();
  };
}
