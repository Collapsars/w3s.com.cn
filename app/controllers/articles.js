import models from '../models/index';




const create = function* (next) {
    const article = yield models.Article.create({ title: "w3s", content: "w3x.com" });
    this.body = "create";
};

const show = function* (next) {

    let article = yield models.Article.findById(1);
    const locals = {
        content: article.content
    };
    //this.body = article;
    //onsole.log("article",locals.content);
    yield this.render('html/tutorial', locals);
};


const showw = function* (next) {
    console.log(this.params.name)
    let article = yield models.Article.findOne({
        attributes: ['content'],
        where: {
            path: this.params.name
        }
    });
    const locals = {
        content: article.content
    };
    //this.body = article;
    //onsole.log("article",locals.content);
    yield this.render('html/tutorial', locals);
};


const showww = function* (next) {
    //console.log(this.request.url)
    //console.log(this.params.name)
    if (this.params.type != 'try') {
        let article = yield models.Article.findOne({
            attributes: ['content'],
            where: {
                path: `${this.request.url}`
            }
        });
        const locals = {
            content: article.content
        };
        //this.body = article;
        //onsole.log("article",locals.content);
        yield this.render('html/tutorial', locals);
    } else {
        
        const language = {
            php: 3,
            python: 0,
            python3: 15,
            py: 0,
            py3:15,
            ruby: 1,
            java: 8,
            c: 7,
            "c++": 7,
            perl: 14,
            lua: 17,
            scala: 5,
            go: 6,
            cs: 10
        }

       

        let article = yield models.Article.findOne({
            attributes: ['content'],
            where: {
                path: `${this.request.url}`
            }
        });
        let type = this.query.type || this.query.language
        let runcode = language[type] ? language[type] : null
        //console.log("this.query.type",runcode)
        const locals = {
            content: article.content,
            runcode: runcode

        };
        //this.body = article;
        //onsole.log("article",locals.content);
        yield this.render('try/attempt', locals);
    }

};


const attempt = function* (next) {
    //console.log(this.query.filename)
    let article = yield models.Article.findOne({
        attributes: ['content'],
        where: {
            path: "filename=" + this.query.filename
        }
    });
    const locals = {
        content: article.content
    };
    //this.body = article;
    //onsole.log("article",locals.content);
    yield this.render('try/attempt', locals);
};



export default {
    create,
    show,
    showw,
    showww,
    attempt
}
