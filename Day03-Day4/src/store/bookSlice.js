import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addNewBook, getBooksById, getAllBooks, editBook, deleteBook as deleteBookApi } from '../api/bookApi';

const initialState = {
  books: [],
  book: {},
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await getAllBooks();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchBookById = createAsyncThunk('books/fetchBookById', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await getBooksById(id);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const createBook = createAsyncThunk('books/createBook', async (book, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await addNewBook(book);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateBook = createAsyncThunk('books/updateBook', async ({ id, book }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await editBook(book, id);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    await deleteBookApi(id);
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchBookById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.book = action.payload;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createBook.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateBook.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.map(book =>
          book.id === action.payload.id ? action.payload : book
        );
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter(book => book.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
