import { getBooksById } from "../api/bookApi";

export const bookDetailsLoader = async ({ params }) => {
  try {
    const response = await getBooksById(params.id);
    return response.data;
  } catch (error) {
    throw new Response("Error fetching book details", { status: 500 });
  }
};

export const bookFormLoader = async ({ params }) => {
  if (params.id === '0') {
    return { title: "", description: "" }; // New book
  }
  try {
    const response = await getBooksById(params.id);
    return response.data;
  } catch (error) {
    throw new Response("Error fetching book data", { status: 500 });
  }
};
