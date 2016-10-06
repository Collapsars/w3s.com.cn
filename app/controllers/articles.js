import models from '../models/index';




const show = function* (next) {
    const article = yield models.Article.findById(3);
    yield this.render('html/html-tutorial');
}
