import server from "./index.js";

import { connectToDb } from "./src/config/db.js";



// 3. Default request handler
server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});



server.listen(8080, async () => {
  await connectToDb();
  console.log(`server is running at port 8080`);
});
