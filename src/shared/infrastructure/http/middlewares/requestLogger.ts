/* eslint-disable no-console */
import RequestError from '@shared/exceptions/RequestError';
import { Request, Response, NextFunction } from 'express';
import StatusCode from '../statusCodes';

export default async function rateLimiter(
    request: Request,
    response: Response,
    next: NextFunction,
): Promise<void> {
    try {
        console.log(`${request.ip} [${request.method}] ${request.path}`);
        console.log('HEADERS\n', request.headers);
        console.log('\nQUERY\n', request.query);
        console.log('\nPARAMS\n', request.params);
        return next();
    } catch (err) {
        throw new RequestError('Too many request', StatusCode.TooManyRequests);
    }
}
