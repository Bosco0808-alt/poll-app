import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="m-2">Poll app</h1>
      <p className="m-2">a poll app by Bosco0808-alt</p>
    </>
  );
}
