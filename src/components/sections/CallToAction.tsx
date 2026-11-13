import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="fluid-section px-8 md:px-20 bg-earth-dark text-sand text-center py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-light leading-tight">
          Pronto para viver esta experiência?
        </h2>
        <p className="text-lg md:text-xl text-sand/80 font-light">
          Reserve agora sua estadia e descubra por que somos a escolha preferida de quem busca excelência em hospitalidade
        </p>
        <div className="pt-8">
          <Button className="bg-sand text-earth-dark px-24 py-8 rounded-full heading-font text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/70 hover:text-earth-dark transition-all border-none cursor-pointer text-lg">
            Reserve Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
