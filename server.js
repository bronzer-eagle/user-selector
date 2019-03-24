const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaRouter = require('koa-router');
const App = require('./app/app.js');
const Logger = require('koa-logger');
const KoaJson = require('koa-json');
const Cors = require('@koa/cors');
const serve = require('koa-static');

const server = new Koa();
const bodyParser = KoaBody();
const router = KoaRouter();
const apiRouter = KoaRouter();
const app = new App();
const logger = Logger();
const koaJson = KoaJson();
const cors = Cors();

apiRouter.get('/users', ctx => {

    const { searchString } = ctx.request.query;

    ctx.response.status = 200;
    ctx.response.body = app.searchUser(searchString);

});

router.use('/api', apiRouter.routes());

server.use(logger);
server.use(koaJson);
server.use(bodyParser);
server.use(cors);
server.use(router.routes()).use(router.allowedMethods());
server.use(serve(`${__dirname}/public`));

app.initialize()
    .then(() => {

        server.listen(3000, () => {
            console.log('Connected, listening on localhost:3000');
        });

    });
