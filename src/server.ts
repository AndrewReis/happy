import "./database/connections";
import express from "express";

const app = express();
app.use(express.json());

app.post("client", (request, response) => {
    return response.send();
});

app.listen(3333, () => {
    console.log("server happy run.");
});
