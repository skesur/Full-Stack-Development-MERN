const expres = require('express');
const app = expres();

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index", {"user" : "SAUMYA"});
})

app.listen(3000);

// <!-- access value of any variable -> <%="Hallo"%> or <%=variable%> -->
// <!-- logical statements -> <%  logic  %> -->
// <!-- render html -> <%- html %> -->
// <!-- comment  -> <%# comment between logical statements %> -->
// <!-- print % -> <%% "abc" %> -->