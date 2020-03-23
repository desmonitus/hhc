var messages_array = [];
exports.get = function(req,res){
    let page = {'page':'index','title':'Dashboard'};
    checkToken(req,res,page);
};