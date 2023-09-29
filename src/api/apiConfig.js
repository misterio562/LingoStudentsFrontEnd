// export const PORT = 4000;
// export const apiURL = `http://localhost:${PORT}`;


process.env.SERVER_PORT
process.env.SERVER_URL

export const apiURL = `${process.env.SERVER_URL}`;