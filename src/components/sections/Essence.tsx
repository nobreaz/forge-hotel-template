export function Essence() {
  return (
    <section className="fluid-section px-8 md:px-20 bg-sand">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1 grid grid-cols-12 gap-4">
          <div className="col-span-11 rounded-[4rem] overflow-hidden shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Spa"
              className="w-full aspect-4/5 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGuWBWe8gJ3jEGxyDZ1DynZQ_lNkLy-Faa7cqWqkwFuPb7Y1sIeVn8GAvUKsq3wNeR7U1vnT26Hxsho-ekudlfTgdrPEkYrK_Or5ZK75sguEMghwVKWvh_zbNHvoF5B4vxLgMnhp5l1BClt8PZHMFPQHql75ORVR4G56MRMDZFp6YJz9xsH2toRabT7UdE8h6HrbB3hD-bo2JK1lt-R_boQCIrADYl0YSxN5kPJPgGtDIxR883JkNaAepnAXmqjkGA3T3_YHvWY4w"
            />
          </div>
          <div className="col-start-8 col-span-5 -mt-32 relative z-10">
            <div className="rounded-3xl overflow-hidden shadow-xl border-12 border-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Lobby"
                className="w-full aspect-square object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBWCgCZYaHj5BKw3CmGSq_0-R-LAwYih6gsNflozW2euAtJiTb5MnfNh20JwaugtgjY2OaQPjqiGeYhNOBv6TPFxeum67Sz_aKH-R-8T4wcsTnBOmLJWz9cCWnXh8iG7wsAFHyzFohv5n0dOyn0coH3HrId5lw6m_w0uShIwZtyl0vFIXKi9gOrWWFGb4-A6DnNGTi22hmTJpZ-xmFlnDjOgvzenBKRDztn6VNWt6msUkH7VxuUUtqyUqen2vRqoWT5bIc8K6YdV6X"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 lg:pl-12 space-y-10">
          <span className="heading-font text-xs uppercase tracking-[0.4em] text-earth-muted font-semibold">
            A Essência
          </span>
          <h2 className="text-4xl md:text-6xl text-earth-dark font-light leading-tight">
            O Refúgio na Costa
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-earth-muted leading-relaxed">
              Situado no coração da orla, a poucos passos do principal polo empresarial da região, o Hotel Vila Serena representa mais que uma simples estadia — é um refúgio onde a hospitalidade genuína encontra a excelência operacional.
              Com 180 acomodações modernas e confortáveis, nossa trajetória é marcada pelo compromisso de vestir a camisa da empresa e trabalhar com o coração, sempre entregando o melhor de nós mesmos.
            </p>
            <p className="text-lg text-earth-muted leading-relaxed italic">
              Cada colaborador carrega em suas veias o compromisso com a perfeição, criando experiências que transformam momentos em memórias eternas para nossos hóspedes.
            </p>
          </div>
          <button className="flex items-center gap-6 heading-font text-xs uppercase tracking-widest text-earth-dark font-bold group pt-4">
            Descubra nossa história
            <span className="h-px w-12 bg-earth-dark group-hover:w-20 transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
