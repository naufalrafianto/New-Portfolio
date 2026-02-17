export default function Home() {
  return (
    <section className="bg-cream text-ink min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">

        <h1 className="font-display text-5xl">
          Naufal
        </h1>

        <p className="font-body text-muted mt-4">
          Frontend Engineer
        </p>

        <button className="
          bg-copper
          text-white
          px-6 py-3 mt-6
          transition-all
          ease-smooth
          hover:bg-copper2
        ">
          View Projects
        </button>

      </div>
    </section>
  );
}
