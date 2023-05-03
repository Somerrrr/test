import About from "@/Components/About/About";
import Buy from "@/Components/Buy/Buy";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";
import Roadmap from "@/Components/Roadmap/Roadmap";
import Tokenomics from "@/Components/Tokenomics/Tokenomics";

export default function Index() {
  return (
    <div translate="no" className="app">
      <Header />
      <Main />
      <About />
      <Buy />
      <Tokenomics />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}
