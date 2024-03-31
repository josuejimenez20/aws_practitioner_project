const express = require("express");

const app = express();

app.use('/user', require('./userRoutes/user.routes'));
app.use('/service', require('./serviceRoutes/service.routes'));
// app.use('/currenlty', require('../routes/currentlyBooksRoutes/index.routes'));
// app.use('/pending', require('../routes/pendingBooksRoutes/index.routes'));
// app.use('/history', require('../routes/historyBooksRoutes/index.routes'));
// app.use('/wish', require('../routes/wishBooksRoutes/index.routes'));

module.exports = app;