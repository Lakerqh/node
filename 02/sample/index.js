const Koa = require('koa');
const app = new Koa()

app.use(async (ctx,next) => {
    const start = new Date().getTime();
    console.log(`start ${ctx.url}`);
    await next();
    console.log(1)
    const end = new Date().getTime();
    console.log(`请求耗时 ${parseInt(end-start)}ms`);
})
app.use(async (ctx,next) => {
    console.log(2)
    ctx.body = [
        {
            name:'tom'
        }
    ]
    await next()
})
app.use((ctx,next) => {
    console.log(3)
    if(ctx.url === '/html'){
        ctx.type = 'text/html;charset=utf-8'
        ctx.body = `<b>我的名字是${ctx.body[0].name}</b>`
    }
})
app.listen(3000)