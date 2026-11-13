import Link from "next/link";

const suites = [
  {
    id: "casal",
    name: "Suítes para casais",
    /* price: "1.250", 8*/
    description: "Conforto e acessibilidade total em um ambiente amplo e funcional, garantindo independência e bem-estar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9BegpMEY_3UueZTGFFUSiq1e9-WuunSG6felVJkKjHllCJARgZHWpOyLsAaV8gynz-LGNoTX3Mjhy6OMDH7LPYM24WWVNWu32cxXgmZFEQQWHmTGrbNRUZ83Mj3TfkiVkoxy20eC7VFJo8LLLrp9D9PdLmEQsmphxyekK2r2yqMSMYk_4JQDHe0AHmYpaiRdvQH7AhbNnRUSo751H1eKnqf3ang8TNV75k_Mizm_UhhoKyj4jmkoHSGXJvx7me02f6mz-dQvcWpgN",
    amenities: ["king_bed", "waves", "wifi"],
  },
  {
    id: "compartilhada",
    name: "Suítes Compartilhadas",
    /* price: "890",*/
    description: "Elegância e sofisticação em espaço aconchegante, ideal para descanso e momentos produtivos.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZtGdj8na_meytc4fQvS2uhBP9-S5KrPHf_Ncr21DFpet6t16zgfkhDzA5tptwzx2jcokDwgng67j-_9tL87zmxgu6WLu2aIPCo7QCuvGyo5El-Mndsmsd4XsoRZFl-gYiQAEa3X64cmHWMBjqXNo-dBhjas3w_CISGn_2fgVWxIgyXwjve12daL6v0D3Mk3O2lwOHiZ6pmlTMPS6T0Ko8bNzJPViU_wyBkDEOxzf95CTIwr6CUczehz6OuC1PGkHtsZpmkfyXM3e",
    amenities: ["desk", "coffee_maker", "ac_unit"],
  },
  {
    id: "pcd",
    name: "Suítes para PCD",
    /* price: "1.580", */
    description: "Experiência exclusiva com varanda privativa e vista panorâmica da costa para momentos memoráveis.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6fRplyq1lO1V8H5s56aIDfdLAy6GZxvaJKjMt6vuwxFQh4pzb1IuUqfBOON3po_nYstCCjXVXWdih0YW1IJOAeh0eG9u3Kmr9aIGcwqRkw3nGOos3PkxiMlacYwOM3jx1Beqlb9xPjJN3z3RBqgRNxMEXINbFRKxNsM5GCa1YnetzY7wpRA_czMMk8AUa1UZETsAp9X5IChY0Ft01jFiFkAfanSRpNicuXgemLFp7iocHtBb9qkVLREkrGH_T5x09Gz2X55GIEmqg",
    amenities: ["apartment", "wine_bar", "kitchen"],
  }
];

export function Accommodations() {
  return (
    <section className="fluid-section px-8 md:px-20 bg-sage">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-6">
          <div className="space-y-4">
            <span className="heading-font text-xs uppercase tracking-[0.4em] text-earth-muted font-semibold">
              Estadia Premium
            </span>
            <h2 className="text-4xl md:text-5xl text-earth-dark font-light">
              Nossas Acomodações
            </h2>
          </div>
          <Link
            href="#"
            className="heading-font text-xs uppercase tracking-[0.2em] text-earth-muted hover:text-earth-dark border-b border-earth-muted/30 pb-1 transition-all"
          >
            Ver todas as suítes
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {suites.map((suite) => (
            <div key={suite.id} className="group flex flex-col">
              <div className="overflow-hidden rounded-[2.5rem] mb-8 bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={suite.name}
                  className="w-full aspect-4/5 object-cover group-hover:scale-105 transition-transform duration-1000"
                  src={suite.image}
                />
              </div>
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-light text-earth-dark">
                  {suite.name}
                </h3>
                 {/*<span className="heading-font text-sm text-earth-muted font-semibold">
                  R$ {suite.price}{" "}
                  <span className="text-[10px] font-normal uppercase opacity-60">
                    /noite
                  </span>
                </span> */}
              </div>
              <p className="text-earth-muted text-sm leading-relaxed mb-6">
                {suite.description}
              </p>
              <div className="flex gap-6 mt-auto">
                {suite.amenities.map((icon) => (
                  <span
                    key={icon}
                    className="material-symbols-outlined text-earth-muted/60 text-lg"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
