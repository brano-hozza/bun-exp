import { Context } from '@kapsonfire/bun-bakery';

export const GET = async (ctx: Context) => ctx.sendAsJson({ yourParam: ctx.params['username'] });
export const POST = async (ctx: Context) =>
  ctx.sendAsJson({ param: ctx.params['username'], body: await ctx.request.json() });
