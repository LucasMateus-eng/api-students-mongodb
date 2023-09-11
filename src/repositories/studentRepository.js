import Student from "../models/Student.js";

class StudentRepository {
	// Exemplo de argumento:
	// { name: "Neris", age: 26, course: "Engenharia", department: "Centro TECH" }
	async create(studentData) {
		const student = new Student(studentData); // criação um objeto do tipo "Student"
		return await student.save(); // salvando os dados do objeto criado no MongoDB
	}

	async getAll() {
		return await Student.find();
	}

	async getById(id) {
		return await Student.findById(id);
	}

	async update(id, studentData) {
		return await Student.findByIdAndUpdate(id, studentData, { new: true });
	}

	async delete(id) {
		return await Student.findByIdAndDelete(id);
	}
}

export default new StudentRepository();
