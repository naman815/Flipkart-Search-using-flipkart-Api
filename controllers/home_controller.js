
  
module.exports.home = function(req,res){

    return res.render('home',{  // rendering home.ejs file via home_controller
        title : "Flipkart Search",     // sending title to ejs file
        data: '',
    })
}