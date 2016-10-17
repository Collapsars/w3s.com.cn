import Router from 'koa-router';
import home from '../controllers/home';
import articles from '../controllers/articles';

const router = Router({
  prefix: '/html'
});

//router.get('/:name', articles.showw);

//router.get('/:type/:name', articles.showww);

// for require auto in index.js

 router.post('/run', home.run);


module.exports = router;
