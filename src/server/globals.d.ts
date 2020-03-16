import { AMContextData } from '@am/core';

declare global {
  namespace Express {
    interface Request {
      id: string;
      context: AMContextData | null;
    }
  }
}
