"use strict";

const fs = require("fs");
process.chdir("../../");
fs.mkdir("jet_components");
process.chdir("jet_components");
fs.cp("node_modules/oraclejet-demo-card-vdom/", "./oraclejet-demo-card-vdom/")


console.log(
  "The oraclejet-demo-card-vdom component has been added to your project \n Add 'oraclejet-demo-card-vdom/loader' to your viewmodel dependency block to initialize this component. \n Add <oraclejet-demo-card-vdom> to your view to use the component."
);
