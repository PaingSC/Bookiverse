import { motion } from "framer-motion";
import styles from "./BookGallery.module.css";
import { books } from "../../data/books"; // Example book data
import { Link } from "react-router-dom";
import { style } from "framer-motion/client";

export default function BookGallery() {
  return (
    <>
      <motion.div
        className={styles.gallery}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {books.map((book) => (
          <Link to={`books/${book.id}`} key={book.id}>
            <motion.div
              key={book.id}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={book.cover} alt={book.title} className={styles.cover} />

              <h3 className={styles.title}>{book.title}</h3>
              <p className={styles.author}>{book.author}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
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
    </>
  );
}
