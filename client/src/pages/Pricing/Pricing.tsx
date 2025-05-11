import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h2>Membership Plans</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Basic</h3>
          <p>$5 / month</p>
          <ul>
            <li>Access to e-books</li>
            <li>Standard support</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Premium</h3>
          <p>$10 / month</p>
          <ul>
            <li>Access to e-books & audiobooks</li>
            <li>Priority support</li>
            <li>Early access to new releases</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
