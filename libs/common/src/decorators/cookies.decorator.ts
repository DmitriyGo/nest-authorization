import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Extracts a cookie value from a request based on the provided key.
 * If no key is provided, it returns all cookies.
 *
 * @param key The name of the cookie to retrieve.
 * @param ctx Execution context providing access to details about the current request.
 * @returns The value of the cookie or null if not found; all cookies if no key is provided.
 */
export const Cookie = createParamDecorator((key: string | undefined, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  if (!key) {
    return request.cookies;
  }
  return request.cookies?.[key] ?? null;
});
