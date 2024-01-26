const siteRoute = require('./site')
const bookRoute = require('./book')
const authorRoute = require('./author')

function route(app) {
    app.use('/', siteRoute)
    app.use('/v1/author', authorRoute)
    app.use('/v1/book', bookRoute)
}

module.exports = route