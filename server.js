const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 4760;
require("dotenv").config();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "hicksLawncare";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then((client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);

    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("/", (req, res) => {
      console.log("Request for home received");
      res.render("index");
    });

    app.get("/about", (req, res) => {
      console.log("Request for about received");
      res.render("about");
    });

    app.get("/services", (req, res) => {
      console.log("Request for services received");
      res.render("services");
    });

    app.get("/gallery", (req, res) => {
      console.log("Request for gallery received");
      res.render("gallery");
    });

    app.get("/faq", (req, res) => {
      console.log("Request for faq received");
      res.render("faq");
    });

    app.get("/appointment", (req, res) => {
      console.log("Request for appointment received");
      res.render("appointment");
    });

    app.post("/requestAppointment", (request, response) => {
      if (!db) {
        response.status(500).send("Database not initialized");
        return;
      }

      db.collection("appointments")
        .insertOne({
          fullName: request.body.user_name,
          phoneNumber: request.body.user_num,
          email: request.body.user_email,
          date: request.body.date,
          time: request.body.time,
        })
        .then((result) => {
          console.log("Appointment set");
          response.redirect("/");
        })
        .catch((error) => {
          console.error(error);
          response.status(500).send("Error setting appointment");
        });
    });

    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
