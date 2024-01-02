import CountriesList from "../components/CountriesList";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Main />
      <CountriesList />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
