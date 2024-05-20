import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Books } from "./components/Books";
import { MyNav } from "./components/MyNav";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookDetails } from "./pages/BookDetails";
import { BookForm } from "./pages/BookForm";

import { SharedLayout } from "./layouts/SharedLayout";
import { getAllBooks } from "./api/bookApi";
import { Error } from "./layouts/Error";
function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route
						path='books'
						loader={getAllBooks}
						element={<Books />}
						errorElement={<Error />}
					/>
					<Route path='books/:id' element={<BookDetails />} />
					<Route path='books/:id/edit' element={<BookForm />} />
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
