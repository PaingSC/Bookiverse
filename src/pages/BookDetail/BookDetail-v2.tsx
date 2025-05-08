import { useParams } from "react-router-dom";
import styles from "./BookDetail.module.css";

const mockBooks = [
  {
    id: "1",
    title: "Stars Beyond",
    author: "Luna Solis",
    cover: "/assets/books/book_dummy.webp",
    description: "An epic journey through galaxies.",
    fullText: "Lorem ipsum dolor sit amet...",
    audioAvailable: true,
  },
];

// Conponent
const BookDetail = () => {
  const { bookId } = useParams();
  console.log(bookId);
  const book = mockBooks.find((book) => book.id === id);
  const isMember = false;

  if (!book) {
    return <p className={styles.notFound}>Book not found.</p>;
  }

  return (
    <div className={styles.container}>
      <img src={book.cover} alt={book.title} className={styles.cover} />
      <div className={styles.content}>
        <h1>{book.title}</h1>
        <h2>By {book.author}</h2>
        <p>{book.description}</p>

        {book.audioAvailable && (
          <button className={styles.audioButton}>🔊 Listen to Preview</button>
        )}
        {isMember ? (
          <div className={styles.actions}>
            <button className={styles.readBtn}>📖 Read</button>
            <button className={styles.downloadBtn}>⬇️ Download</button>
          </div>
        ) : (
          <div className={styles.subscribeNotice}>
            <p>This content is locked.</p>
            <a href="/pricing">Subscribe to access</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
