import styles from "./BookGallery.module.css";
import { books } from "../../data/books"; // Example book data
import { Link } from "react-router-dom";

export default function BookGallery() {
  return (
    <div className={styles.gallery}>
      {books.map((book) => (
        <Link to={`books/${book.id}`} key={book.id}>
          <div className={styles.card}>
            <img src={book.cover} alt={book.title} className={styles.cover} />
            <h3 className={styles.title}>{book.title}</h3>
            <p className={styles.author}>{book.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
