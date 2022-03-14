import Navbar from "../components/Navbar.tsx";
import Sidebar from "../components/Sidebar";
import LargeWithLogoCentered from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <LargeWithLogoCentered />
    </>
  );
}
