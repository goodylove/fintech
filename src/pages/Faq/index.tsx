import Footer from './../../components/footer/index';
import FAQ from './../../components/FAQ/index';
import Button from './../../components/button/index';
const FaqPage = () => {
  return (
    <main className="w-full">
      <section className="mt-5 md:h-[25%] flex justify-center items-center h-[18%]  ">
        <div
          className="flex justify-center flex-col
        "
        >
          <h3 className="text-purple text-center">FAQS</h3>
          <article className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua.
          </article>
        </div>
      </section>
      <section className="flex justify-center bg-[#F5F5F5]">
        <FAQ />
      </section>
      <section className="flex justify-center   w-full m-5">
        <div className="w-[80%] bg-white  p-4">
          <div className="bg-black flex md:justify-between items-center rounded-xl p-5 flex-col md:flex-row ">
            <div className="text-white flex flex-col">
              <span className="text-[20px]">Still have question?</span>
              <span className="text-[13px]">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </span>
            </div>
            <a href="tel:+2349116894070">
              <Button
                text="Get in touch"
                className="rounded text-black bg-white p-2 font-[700] mt-3"
              />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FaqPage;
