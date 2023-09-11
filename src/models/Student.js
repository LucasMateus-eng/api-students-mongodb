import mongoose from "mongoose";

// MODELO DOS DADOS QUE SERÃO SALVOS
const studentSchema = new mongoose.Schema({
	name: String,
	age: Number,
	course: String,
	department: String,
});

// COLEÇÃO QUE IRÁ ARMAZENAR OS DADOS CONFORME O MODELO ACIMA.
// LEMBRETE: COLEÇÃO É UM "SINÔNIMO" DE TABELA (CONSIDERANDO UM BANCO RELACIONAL)
const Student = mongoose.model("Student", studentSchema);

export default Student;
