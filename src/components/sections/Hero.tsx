import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { DatePickerSimple } from "../ui/datepicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Infinity Pool"
          className="w-full h-full object-cover scale-100"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGkUEs08WqBOYcRuFo9pgIsgEW15vreuXDFzynBJ8lChHI-BWMGHFEcsBTPJigPOv3O2taNU9qs8PYu1uTgnh9fmpWeYsRPXQFVvhFjpzpqna-XzzLdI-sZbOyvX-a6IrcxB4cI3o0MP5HOEauG_2VT1XIyLIsYbs_z7KyTXGvEULRTHnW1fk2neHf4rFehCkRyv4IksnLC0oAC3Dmqq3l0ebk3QTnYD3ewBNbdIiOyVzaD1XGpLNh44VPCJBNRehYHpW6dOeETcRs"
        />
        <div className="absolute inset-0 bg-green-950/50 backdrop-sepia-[0.1]"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-5xl flex-1 flex flex-col justify-center items-center mx-auto w-full py-8 md:py-12">
        <span className="heading-font text-xs uppercase tracking-[0.4em] text-white/90 mb-6 block font-medium">
          Exclusividade & Serenidade
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 lg:mb-10 font-light">
          HOTEL VILA SERENA
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/90 font-normal max-w-xl mx-auto italic">
          Onde a sofisticação urbana encontra a brisa constante do Atlântico.
        </p>
      </div>
      <div className="relative z-20 w-[95%] md:max-w-6xl mx-auto mt-4 md:mt-8">
        <div className="bg-sand/80 backdrop-blur-md p-4 md:p-3 rounded-3xl md:rounded-full shadow-lg flex flex-col md:flex-row items-center gap-3 md:gap-1">
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-3 md:gap-x-2 md:gap-y-0 px-2 sm:px-6 md:px-12 pb-1 md:pb-1">
            <div className="py-2 md:pr-6 md:border-r border-earth-dark/10 last:border-none flex flex-col justify-center">
              <label className="heading-font text-[10px] uppercase tracking-widest text-earth-muted flex items-center gap-1 mb-1 pl-1 md:pl-0">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                Check-in
              </label>
              <div className="w-full mt-1">
                <DatePickerSimple />
              </div>
            </div>
            <div className="py-2 md:pr-6 md:border-r border-earth-dark/10 last:border-none md:ml-4 flex flex-col justify-center">
              <label className="heading-font text-[10px] uppercase tracking-widest text-earth-muted flex items-center gap-1 mb-1 pl-2 md:pl-0">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                Check-out
              </label>
              <div className="w-full mt-1">
                <DatePickerSimple />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 py-1 md:py-2 md:ml-4 md:pr-6 flex flex-col justify-center mt-1 md:mt-0">
              <label className="heading-font text-[10px] uppercase tracking-widest text-earth-muted block mb-1 pl-1 md:pl-0">
                Hóspedes
              </label>
              <div className="w-full mt-1">
                <Select>
                  <SelectTrigger className="w-full bg-white border-none p-2 focus:ring-0 text-sm text-earth-dark">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="2-adultos-0-criancas">1 Adulto, 0 Crianças</SelectItem>
                      <SelectItem value="1-adulto">2 Adultos, 0 Crianças</SelectItem>
                      <SelectItem value="2-adultos-1-crianca">2 Adultos, 1 Criança</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <Button className="w-full h-auto md:w-auto bg-earth-dark text-sand px-12 py-5 rounded-full heading-font text-xs uppercase tracking-[0.2em] font-bold hover:bg-earth-muted transition-all whitespace-nowrap border-none md:mr-2 cursor-pointer mt-2 md:mt-0">
            Verificar Disponibilidade
          </Button>
        </div>
      </div>
    </section>
  );
}
