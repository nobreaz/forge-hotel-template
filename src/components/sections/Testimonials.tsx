export function Testimonials() {
  return (
    <section className="fluid-section px-8 md:px-20 bg-sand">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <span className="material-symbols-outlined text-5xl text-earth-muted/30">
          spa
        </span>
        <blockquote className="text-2xl md:text-4xl text-earth-dark font-light leading-relaxed italic">
          "Uma experiência transcendental neste hotel. O serviço é impecável,
          discreto e antecipa todas as nossas necessidades. A vista do rooftop
          ao pôr do sol é algo que guardarei para sempre."
        </blockquote>
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full grayscale overflow-hidden border-2 border-sage p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Guest"
              className="w-full h-full object-cover rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCMynPP8KlnKNcgEEMjuibktcgfQeCrWdwghleYiMlN1wMCMfP_4aguJxpGn_7DMYAtmcHDFd4ov3-O3YI2jBhdA3rsYmOdj1F0plBl-Io2WDO8_EicgZKmZltQYsrhTQtysR6p78gyDwJE8szgeCRj1iGrw8UDCdi3MLqi55hObZeTJE3pHhGWJ8PCP8ygeprmTrxUM6oqeXnJiYLkWLBfof1hZo7b53FoMA3twLQLN290dCvn49erVROOgu7hOpu2bXNUBr_jfXJ"
            />
          </div>
          <div className="text-center">
            <h5 className="heading-font text-xs uppercase tracking-widest text-earth-dark font-bold mb-1">
              Ricardo Siqueira
            </h5>
            <p className="text-[10px] uppercase tracking-widest text-earth-muted">
              CEO, Global Logistics
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button className="w-2 h-2 rounded-full bg-earth-dark" aria-label="Dot 1"></button>
          <button className="w-2 h-2 rounded-full bg-earth-muted/20" aria-label="Dot 2"></button>
          <button className="w-2 h-2 rounded-full bg-earth-muted/20" aria-label="Dot 3"></button>
        </div>
      </div>
    </section>
  );
}
