const { Pool } = require('pg');

// Local copy of the jService database (see code/jservice). Defaults match its config/database.yml
const pool = new Pool({
    host: process.env.CLUE_DB_HOST || 'localhost',
    port: process.env.CLUE_DB_PORT || 5432,
    database: process.env.CLUE_DB_NAME || 'jarchive_development',
    user: process.env.CLUE_DB_USER || 'steveo',
    password: process.env.CLUE_DB_PASSWORD || 'stepheno',
});

const CLUE_COLUMNS = 'id, answer, question, value, airdate, category_id, game_id, invalid_count';

// jservice.io sent airdate as an ISO string (the game slices the year out of it), pg returns a Date
const formatClue = (clue) => ({ ...clue, airdate: clue.airdate ? clue.airdate.toISOString() : null });

const getClues = async (categoryId) => {
    const { rows } = await pool.query(`SELECT ${CLUE_COLUMNS} FROM clues WHERE category_id = $1 ORDER BY id`, [categoryId]);
    return rows.map(formatClue);
};

// Same shape as jservice.io's /api/category response
exports.getCategory = async (id) => {
    const { rows } = await pool.query('SELECT id, title, clues_count FROM categories WHERE id = $1', [id]);

    if (rows.length === 0) {
        return null;
    }

    const category = rows[0];
    category.clues = await getClues(category.id);
    category.clues_count = category.clues.length;

    return category;
};

exports.getRandomCategory = async (minClues = 5) => {
    const { rows } = await pool.query('SELECT id FROM categories WHERE clues_count >= $1 ORDER BY random() LIMIT 1', [minClues]);
    return rows.length ? exports.getCategory(rows[0].id) : null;
};

// Same shape as jservice.io's /api/random response
exports.getRandomClues = async (count = 1) => {
    const { rows } = await pool.query(
        `SELECT ${CLUE_COLUMNS.split(', ').map((c) => `cl.${c}`).join(', ')}, row_to_json(ca) AS category
         FROM clues cl JOIN categories ca ON ca.id = cl.category_id
         ORDER BY random() LIMIT $1`,
        [Math.min(count, 100)]
    );
    return rows.map(formatClue);
};
