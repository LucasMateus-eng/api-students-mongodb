import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./routes/studentRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

// Conectando ao banco de dados
mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Conectado ao MongoDB");
	})
	.catch((error) => {
		console.error("Erro ao conectar ao MongoDB: ", error);
	});

app.use(express.json());
app.use("/api", studentRoutes);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
