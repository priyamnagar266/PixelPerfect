// Enable CORS for Render deployment
import cors from "cors";

export function setupCors(app) {
  const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : [
    "http://localhost:5173",
    "http://localhost:3000"
  ];
  app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
}
