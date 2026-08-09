import heroImg from '../assets/hero.png'

  const Hero = () => {
    return (
      <section className="relative min-h-[90vh] flex items-center">
        <img
          src={heroImg}
          alt="Equipo de abogados de Estatus Legal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/50 to-navy/0" />

        <div className="relative z-10 max-w-7xl ml-0 px-6 py-24">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight max-w-2xl">
            TRUSTED LEGAL COUNSEL FOR YOUR PEACE OF MIND
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-xl">
            Guiding You Through Legal Challenges with Integrity,
            Dedication, and Expertise.
          </p>
          <a
            href="#"
            className="inline-block mt-10 bg-white text-navy font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            GET A FREE CONSULTATION
          </a>
        </div>
      </section>
    )
  }

  export default Hero