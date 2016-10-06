import models from '../models/index';




const create = function* (next) {
    const article = yield models.Article.create({title:"w3s",content:"w3x.com"});
    this.body = "create";
};

const show = function* (next) {
    let article = yield models.Article.findById(2);
    const locals = {
        content : article.content
    };
    //this.body = article;
    //onsole.log("article",locals.content);
    yield this.render('html/html-tutorial',locals);
};

export default {
    create,
    show
}