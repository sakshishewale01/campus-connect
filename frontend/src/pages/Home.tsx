import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/images/hero.svg";

function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-50 to-white min-h-screen flex items-center">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}

          <div>

            <h1 className="text-6xl font-bold leading-tight">

              Empowering

              <span className="text-blue-600"> Students </span>

              Through Collaboration

            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">

              CampusConnect is a one-stop academic platform where students
              can share Notes, Previous Year Papers, solve doubts,
              and collaborate on innovative projects.

            </p>

            <div className="mt-10 flex gap-5">

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">

                Get Started

              </button>

              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">

                Explore

              </button>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <img
              src={heroImage}
              alt="Hero"
              className="w-full"
            />

          </div>

        </div>
      </section>

      <Footer />

    </>
  );
}

export default Home;