import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href={"/login"}>Go to Login Page</Link>
      <br />
      <Link href={"/about"}>Go to About Page</Link>
      <br />
      <Link href={"/profile"}>Go to Profile Page</Link>

      <br />
    </main>
  );
}
