import {
    RequestHandler,
    type NextFunction,
    type Request,
    type Response,
} from 'express';

export const catchAsync =
    (fn: RequestHandler) =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        return await Promise.resolve(fn(req, res, next)).catch(next);
    };
