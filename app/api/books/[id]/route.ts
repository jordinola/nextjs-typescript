import books from '@/app/api/db';

export const PUT = async (request: Request, context: { params: { id: string } }) => {
    const id = +context.params.id;
    const book = await request.json();

    const index = books.findIndex((b) => b.id === id);
    book[index] = book;
    return Response.json(books);
}

export const DELETE = async (request: Request, context: { params: { id: string } }) => {
    const id = +context.params.id;

    const indext = books.findIndex((b) => b.id === id);
    books.splice(indext, 1);
    return Response.json(books);
}