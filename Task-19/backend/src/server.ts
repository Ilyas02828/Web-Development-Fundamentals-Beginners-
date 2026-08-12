import "dotenv/config";

import app from "./app";
import connectDB from "./config/database";

const PORT = process.env.PORT || 5000;

async function startServer(): Promise<void> {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
}

startServer();
