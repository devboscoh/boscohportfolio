const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <img
          src="/frontend/public/profile-photo.jpg"
          alt="Boscoh Brilliant"
          className="w-32 h-32 rounded-full border-4 border-white/30"
        />
        <h1 className="text-4xl md:text-5xl font-light tracking-wide">
          Hi, I’m <span className="font-semibold">Boscoh Brilliant</span>
        </h1>
        <p className="uppercase text-sm tracking-[0.3em] opacity-80">
          Environment • GIS • Web Development
        </p>
      </div>
    </section>
  );
};

export default Hero;
