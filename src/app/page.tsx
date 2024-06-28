import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
