//import request from 'request';
import Promise from 'bluebird'

var request = Promise.promisify(require("request"));



const index = function *(next){
    yield this.render('home/index');
}




const html = function *(next) {
    yield this.render('html/html-tutorial');
}

const attempt = function *(next) {
    yield this.render('try/attempt');
}

const testt = function *(next) {
    console.log("ctx.body.code",this.request.body.code);
    //await ctx.render('try/attempt');
   //await console.log("ctx.body.code",  ctx.request);
    let options = {
        method:'post',
        url: 'http://tool.runoob.com/compile.php',

        form : {
            'code':this.request.body.code,
            'language':3
        }
               
    };

     let result = yield  request(options);

     console.log("body",result.body);
     this.body = yield JSON.parse(result.body) ;
      
    

 
}

export default {
    index,
    html,
    attempt,
    testt
};