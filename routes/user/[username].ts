import { Context } from "@kapsonfire/bun-bakery";

export const GET = async (ctx: Context) => {
  ctx.sendAsJson({ yourParam: ctx.params["username"] });
};
