import fs from 'fs';
import path from 'path';
import Router from 'koa-router';
import home from '../controllers/home';
import articles from '../controllers/articles';

const basename = path.basename(module.filename);
const router = Router();

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    let route = require(path.join(__dirname, file));
    router.use(route.routes(), route.allowedMethods());
  });






router.get('/', home.index);

//router.get('/html', home.html);

router.get('/try', home.attempt);

router.post('/testphp', home.testt);

router.get('/create', articles.create);
router.get('/show', articles.show);

export default router;
