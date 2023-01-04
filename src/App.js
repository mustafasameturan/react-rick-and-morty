import CardsSection from "./CardsSection";

function App() {
  return (
    <>
      <section className="bg-[#202329] min-h-full text-white relative p-5">
        <h1 className="font-bold text-center text-secondary uppercase text-lg">Compare Rick And Morty Characters</h1>
        <p className="text-[10px] absolute bottom-3 left-0 right-0 text-center mb-5">© Hamza Şişman | Rick And Morty Project
          with using <b>Tailwind CSS</b> and <b>React</b>

        </p>
        <CardsSection />
      </section>
    </>
  );
}

export default App;
