import styles from "./Home.module.css";
import { books } from "../../data/books";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1>Welcome to Bookiverse</h1>
        <p>Read and listen to your favorite books all in one place.</p>
        <button className={styles.cta}>Explore Library</button>
      </div>

      <div className={styles.gallery}>
        {books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className={styles.card}>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
