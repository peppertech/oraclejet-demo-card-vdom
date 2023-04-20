"use strict";

const fs = require("fs");
const path = require("path");

process.chdir("../../");
fs.stat("./jet_components", (error, stats) => {
  if (error) {
    console.log("jet_components folder doesn't exist.  Creating it now.");
    fs.mkdir(path.join("./", "jet_components"), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log("Directory created successfully!");
      process.chdir("./jet_components");
      console.log("Copying files now.");
      fs.cp(
        "../node_modules/oraclejet-demo-card-vdom/",
        "./oraclejet-demo-card-vdom/",
        { recursive: true },
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("New component added successfully!");
            console.log(
              "The oraclejet-demo-card-vdom component has been added to your project \n Add 'oraclejet-demo-card-vdom/loader' to your viewmodel dependency block to initialize this component. \n Add <oraclejet-demo-card-vdom> to your view to use the component."
            );
          }
        }
      );
    });
  } else {
    console.log("jet_components folder already exists.");
    process.chdir("./jet_components");
    console.log("Copying files now.");
    fs.cp(
      "../node_modules/oraclejet-demo-card-vdom/",
      "./oraclejet-demo-card-vdom/",
      { recursive: true },
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("New component added successfully!");
          console.log(
            "The oraclejet-demo-card-vdom component has been added to your project \n Add 'oraclejet-demo-card-vdom/loader' to your viewmodel dependency block to initialize this component. \n Add <oraclejet-demo-card-vdom> to your view to use the component."
          );
        }
      }
    );
  }
});
