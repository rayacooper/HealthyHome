const user = require('./user');

module.exports = (app) => {
    app.use('/auth/', user);
}