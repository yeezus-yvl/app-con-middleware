const express = require("express") ;
const app = express();
require("dotenv").config();
var middleware = require('./middleware');

const indexRouter = require("./routes");
const PrincipalRouter = require("./routes");
const VariantesRouter = require("./routes");

app.use('/', indexRouter);
app.use('/home', PrincipalRouter);
app.use('/variante', VariantesRouter);

const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("servidor corriendo en http://localhost:"+port);
});
