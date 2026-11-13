import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 px-8 md:px-20 border-t border-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1 space-y-8">
            <div className="heading-font text-lg font-light tracking-[0.2em] uppercase text-earth-dark">
              Hotel Vila Serena
            </div>
            <p className="text-sm text-earth-muted leading-relaxed">
              O destino definitivo para o viajante que busca equilíbrio entre
              produtividade e prazer no litoral brasileiro.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-earth-dark/40 hover:text-earth-dark transition-colors">
                <span className="material-symbols-outlined text-xl">language</span>
              </Link>
              <Link href="#" className="text-earth-dark/40 hover:text-earth-dark transition-colors">
                <span className="material-symbols-outlined text-xl">share</span>
              </Link>
              <Link href="#" className="text-earth-dark/40 hover:text-earth-dark transition-colors">
                <span className="material-symbols-outlined text-xl">mail</span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="heading-font text-[10px] uppercase tracking-[0.3em] text-earth-dark font-bold">
              Navegação
            </h6>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-xs uppercase tracking-widest text-earth-muted hover:text-earth-dark transition-colors">
                  Suites
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs uppercase tracking-widest text-earth-muted hover:text-earth-dark transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs uppercase tracking-widest text-earth-muted hover:text-earth-dark transition-colors">
                  Carreira
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="heading-font text-[10px] uppercase tracking-[0.3em] text-earth-dark font-bold">
              Suporte
            </h6>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-xs uppercase tracking-widest text-earth-muted hover:text-earth-dark transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs uppercase tracking-widest text-earth-muted hover:text-earth-dark transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs uppercase tracking-widest text-earth-muted hover:text-earth-dark transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="heading-font text-[10px] uppercase tracking-[0.3em] text-earth-dark font-bold">
              Localização
            </h6>
            <address className="not-italic text-sm text-earth-muted leading-relaxed mb-6">
              Av. Beira-Mar, 1200 - Vila Serena
              <br />
              Costa Serena, RJ - Brasil
            </address>
            <div className="h-40 w-full bg-sand rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-earth-dark/30">
                location_on
              </span>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-sand flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="heading-font text-[10px] uppercase tracking-widest text-earth-muted/60">
            © 2026 Hotel Vila Serena. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="heading-font text-[10px] uppercase tracking-widest text-earth-muted/60">
              PT
            </span>
            <span className="heading-font text-[10px] uppercase tracking-widest text-earth-muted/60">
              EN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
