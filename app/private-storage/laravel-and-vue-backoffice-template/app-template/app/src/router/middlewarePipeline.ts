import type { RouteLocationNormalized } from "vue-router";

type NextFunction = () => Promise<void> | void;

type Middleware = (ctx: { next: NextFunction, to: RouteLocationNormalized }) => Promise<void> | void;

export default function middlewarePipeline(context: { next: NextFunction, to: RouteLocationNormalized }, middleware: Middleware[], index: number): NextFunction {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next;
  }

  return async () => {
    await nextMiddleware({
      ...context,
      next: middlewarePipeline(context, middleware, index + 1)
    });
  }
}
