import { measureMemory } from "vm";
import { ErrorCode, HttpException } from "./root";
import { error } from "console";

export class BadRequestsException extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 400, null);
  }
}
