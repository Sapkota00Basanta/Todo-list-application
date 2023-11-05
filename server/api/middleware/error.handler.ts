import { Request, Response, NextFunction } from 'express';

export default (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  res.status(err.status || 500);
  res.send(`<h1>${err.status || 500} Error</h1>` + `<pre>${err.message}</pre>`);
};
