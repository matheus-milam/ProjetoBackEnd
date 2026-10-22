import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
	dialect: "postgres",
	database: process.env.DB_NAME || "musics",
	username: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || "123456",
	host: process.env.DB_HOST || "localhost",
	port: Number(process.env.DB_PORT) || 5432,
});

export async function connectToDB() {
	try {
		await sequelize.authenticate(); //Faz auth no banco

		console.log("Conectado ao banco de dados com sucesso")

		await sequelize.sync({ force: true }); // Cria as tabelas baseado nos schemas

		console.log("Tabelas sincronizadas com sucesso");

	} catch (error) {
		console.error("Erro ao conectar ao banco de dados:", error)
	}
}