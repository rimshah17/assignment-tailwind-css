import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Small Banner */}
        <section className="bg-pink-100 py-12 text-center">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-black">Connect with My Dream</h1>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto text-center">
            <form className="max-w-lg mx-auto flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md bg-pink-50"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md bg-pink-50"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 p-3 rounded-md bg-pink-50"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-300 text-black font-semibold py-3 rounded-md hover:bg-pink-400"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
