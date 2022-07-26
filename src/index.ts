import { Context, Router } from '@kapsonfire/bun-bakery';

const router = new Router({
  port: 3000,
  assetsPath: import.meta.dir + '/assets/',
  routesPath: import.meta.dir + '/routes/',
});

router.addMiddleware({
  onRequest: (ctx: Context) => {
    console.log(ctx.method, ctx.path);
  },
});
