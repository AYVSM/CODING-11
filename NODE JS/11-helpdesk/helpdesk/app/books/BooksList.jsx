import clientPromise from '../../lib/mongodb';
import Link from 'next/link';

const Books = async () => {
  const client = await clientPromise;
  const db = client.db('bookstore');
  const books = await db.collection('books').find({}).toArray();

  return (
    <section className="blog">
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id.toString()}>
            <Link href={`/books/${book._id.toString()}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Books;
