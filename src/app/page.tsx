import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
