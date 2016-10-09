import models from '../models/index';




const create = function* (next) {
    const article = yield models.Article.create({title:"w3s",content:"w3x.com"});
    this.body = "create";
};

const show = function* (next) {

    let article = yield models.Article.findById(1);
    const locals = {
        content : article.content
    };
    //this.body = article;
    //onsole.log("article",locals.content);
    yield this.render('html/tutorial',locals);
};


const showw = function* (next) {
    console.log(this.params.name)
    let article = yield models.Article.findOne({
      attributes:['content'],
      where:{
        path:this.params.name
      }
    });
    const locals = {
        content : article.content
    };
    //this.body = article;
    //onsole.log("article",locals.content);
    yield this.render('html/tutorial',locals);
};

const attempt = function* (next) {
    //console.log(this.query.filename)
    let article = yield models.Article.findOne({
      attributes:['content'],
      where:{
        path:this.query.filename
      }
    });
    const locals = {
        content : article.content
    };
    //this.body = article;
    //onsole.log("article",locals.content);
    yield this.render('try/attempt',locals);
};



export default {
    create,
    show,
    showw,
    attempt
}
