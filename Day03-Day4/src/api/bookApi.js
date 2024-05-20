import axios from "axios";

const baseURL = "http://localhost:3000/books";

const getAllBooks = () => axios.get(baseURL);

const getBooksById = (bookId) => axios.get(`${baseURL}/${bookId}`);

const addNewBook = (book) => axios.post(baseURL, book);
const editBook = (book, bookId) => axios.put(`${baseURL}/${bookId}`, book);
const deleteBook = (bookId) => axios.delete(`${baseURL}/${bookId}`);

export { getAllBooks, getBooksById, addNewBook, editBook, deleteBook };
