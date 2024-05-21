import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
  } from "react-router-dom";
  import "./App.css";
  import { Books } from "./components/Books";
  import { About } from "./pages/About";
  import { Home } from "./pages/Home";
  import { NotFound } from "./pages/NotFound";
  import { BookDetails } from "./pages/BookDetails";
  import { BookForm } from "./pages/BookForm";
  import { SharedLayout } from "./layouts/SharedLayout";
  import { getAllBooks } from "./api/bookApi";
  import { Error } from "./layouts/Error";
  import { bookDetailsLoader, bookFormLoader } from "./loaders/loaders";
  
  function App() {
	const router = createBrowserRouter(
	  createRoutesFromElements(
		<>
		  <Route path='/' element={<SharedLayout />}>
			<Route index element={<Home />} loader={getAllBooks}/>
			<Route path='about' element={<About />} />
			<Route
			  path='books'
			  loader={getAllBooks}
			  element={<Books />}
			  errorElement={<Error />}
			/>
			<Route
			  path='books/:id'
			  loader={bookDetailsLoader}
			  element={<BookDetails />}
			  errorElement={<Error />}
			/>
			<Route
			  path='books/:id/edit'
			  loader={bookFormLoader}
			  element={<BookForm />}
			  errorElement={<Error />}
			/>
			<Route path='*' element={<NotFound />} />
		  </Route>
		</>
	  )
	);
	return (
	  <>
		<RouterProvider router={router} />
	  </>
	);
  }
  
  export default App;
  