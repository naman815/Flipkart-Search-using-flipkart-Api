const axios = require('axios'); // including axios 

const axiosInstance = axios.create({
  baseURL: 'https://affiliate-api.flipkart.net/affiliate/1.0/search.json', // base url of flipkart api
  headers: {                                                               // header which includes affiliate id and token 
    'Fk-Affiliate-Id': 'yuganshch',
    'Fk-Affiliate-Token': '34adf1305516462d8ce93de45594da81',
  }
})

module.exports.results = function(req,res){


  axiosInstance.get('/', {   // making url to hit api by including url
    params: {
      query: req.query.query, //accessing query params coming via get request
      resultCount: 10, // to number of search results shown in list
    }
  })
  .then(function(response) {
    
    res.render('home',{
      title : "ShopNani",
      data: response.data.products  // send response coming from flipkart api in form of JSON
    });
   
  })
  .catch(function(err) {
    console.log('Error: ', err); // print error
  });   
};
