// pages/api/clientes.js
import { Pool } from 'pg';

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost', // ou o host do seu banco de dados
    database: 'houseofcodedatabase',
    password: 'Mvof.204615',
    port: 5432,
});

// Função de manuseio da requisição
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, lastname, contact, service, message } = req.body;

        const query = `
            INSERT INTO clientes (name, lastname, contact, service, message)
            VALUES ($1, $2, $3, $4, $5)
        `;
        const values = [name, lastname, contact, service, message];

        try {
            await pool.query(query, values);
            res.status(200).json({ message: 'Dados inseridos com sucesso!' });
        } catch (error) {
            console.error('Erro ao inserir dados:', error);
            res.status(500).json({ error: 'Erro ao inserir dados' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
