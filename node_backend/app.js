const app = express ();
app.use(express.json());


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });


app.get('/status', (req, res) => {});