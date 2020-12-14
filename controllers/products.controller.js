
const { parseInt } = require('../db');
const db = require('../db');
const products = db.get('products').value();

module.exports.get = (req, res, next) => {
    const page = req.query.page || 1;
    const perPage = 8;

    let start = (page - 1) * perPage;
    let end = page * perPage;
    const lastPage = Math.ceil(products.length/perPage);
    
    if (page >=1 && page <= lastPage){
        res.render('products/index', {
            products: products.slice(start, end),
            page: page,
            previousPage: page -1,
            nextPage: Number(page)+1,
            lastPage: lastPage
        } )
    } else {
        res.render('products/index')
    }
   
}