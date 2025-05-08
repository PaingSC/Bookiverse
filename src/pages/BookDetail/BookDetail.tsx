import { useParams } from "react-router-dom";
import styles from "./BookDetail.module.css";
import { books } from "../../data/books";

const BookDetail = () => {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return <p className={styles.notFound}>Book not found.</p>;
  }

  return (
    <div className={styles.container}>
      <img src={book.cover} alt={book.title} className={styles.cover} />
      <div className={styles.info}>
        <h1>{book.title}</h1>
        <p className={styles.author}>By {book.author}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
