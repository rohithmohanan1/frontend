import "../app.scss"
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return(
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
    </div>
  );
};

export default Home;
