import Router from 'koa-router';
import articles from '../controllers/articles';

const router = Router({
  prefix: '/html'
});

//router.get('/:name', articles.showw);

//router.get('/:type/:name', articles.showww);

// for require auto in index.js
module.exports = router;
