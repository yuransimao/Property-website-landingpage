import app from "./app";
const port = process.env.PORT ;

app.listen(port, () => `Server is running at http://localhost:${port}`)