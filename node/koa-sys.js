const Koa = require('koa');
const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.use(async ctx => {
    // console.log(ctx);
    if(ctx.request.url === '/api/work-bench') {
        console.log('work-bench');
        return ctx.body = {
            key: 'second-router',
            value: ['/overview','/echart','/editor','/chatter']
        };
    }else if (ctx.request.url === '/api/manage-center') {
        console.log('work-bench');
        return ctx.body = {
            key: 'second-router',
            value: ['/user-manage','/role-manage','/permission-manage']
        };
    }
    
  });
  
  

app.listen(3000, () => {
    console.log('服务器已启动');
});