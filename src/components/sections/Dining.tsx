export function Dining() {
  return (
    <section className="fluid-section px-8 md:px-20 bg-surface overflow-hidden relative">
      <div className="absolute -top-1/4 -right-1/4 w-[60%] aspect-square bg-sand/30 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32 relative z-10">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="heading-font text-xs uppercase tracking-[0.4em] text-earth-dark/60 font-semibold">
              Gastronomia Autoral
            </span>
            <h2 className="text-5xl md:text-7xl text-earth-dark font-light leading-tight">
              Vila Gourmet
            </h2>
          </div>

          {/* Imagem para Mobile (Abaixo do Título) */}
          <div className="md:hidden relative w-full pt-4 pb-2">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Seafood Dish"
                className="w-full h-full object-cover -rotate-3 scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL_IsOWeE64a6cVSh0Gw3WGfuJi9HWKVSwqbJQEQn3b5Ha0YJQjlo93C--GUUoGtLBGRUwgd64_eJd0itUgU7WGsBbhRLOSso1yANIvO5rdygxAX1p6p_p0ee2-dh33EdVNmqyDAjCH8c1J63-chEDlgYovXzezpypgQylY2QhigGpm4hDHcC8wWvp0HHdHedRsfThliM9WCp5nb61uOGvCdOFA9lrQuNNl6FWaUVSnTnr2jTPe8v9f1Ufweje_kXx9h1l9gSmdFkS"
              />
            </div>
          </div>

          <p className="text-xl text-earth-dark/80 leading-relaxed max-w-lg">
            Nosso restaurante dispõe de um ambiente acolhedor e elegante, onde é servido um inigualável buffet de café da manhã, com diversas frutas tropicais, cereais e sucos frescos, além de pães sempre quentinhos saindo da nossa fornada e uma estação para omeletes e tapiocas, feitas de acordo com o seu paladar.
          </p>
          <div className="border-l border-earth-dark/20 pl-8 py-2">
            <h4 className="text-xl font-normal italic text-earth-dark mb-4">
              "O sabor do Atlântico em cada prato."
            </h4>
            <p className="text-sm text-earth-dark/70 leading-relaxed max-w-md">
              Também oferecemos serviço à la carte diariamente, com um rico menu da culinária nacional e internacional. Além disso, o Vila Gourmet oferece ao longo da semana noites temáticas, para clientes que buscam variedade, qualidade e rapidez em suas refeições.
            </p>
          </div>
          <button className="bg-earth-dark text-sand px-12 py-5 rounded-full heading-font text-xs uppercase tracking-[0.2em] font-bold hover:bg-earth-muted transition-all">
            Reservar uma Mesa
          </button>
        </div>

        {/* Imagem Padrão para Desktop */}
        <div className="hidden md:block relative">
          <div className="relative aspect-square rounded-[5rem] overflow-hidden rotate-3 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Seafood Dish"
              className="w-full h-full object-cover -rotate-3 scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL_IsOWeE64a6cVSh0Gw3WGfuJi9HWKVSwqbJQEQn3b5Ha0YJQjlo93C--GUUoGtLBGRUwgd64_eJd0itUgU7WGsBbhRLOSso1yANIvO5rdygxAX1p6p_p0ee2-dh33EdVNmqyDAjCH8c1J63-chEDlgYovXzezpypgQylY2QhigGpm4hDHcC8wWvp0HHdHedRsfThliM9WCp5nb61uOGvCdOFA9lrQuNNl6FWaUVSnTnr2jTPe8v9f1Ufweje_kXx9h1l9gSmdFkS"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-earth-dark/10"></div>
        </div>
      </div>
    </section>
  );
}
