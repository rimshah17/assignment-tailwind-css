import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Banner Section */}
        <section className="bg-pink-100 py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Dream</h1>
            <p className="text-lg text-gray-700">
              You are proof that dreams come true with hard work
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-4 bg-white text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-black">About Us</h2>
            <p className="text-gray-600 leading-7 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
            <p className="text-gray-600 leading-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
