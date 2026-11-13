import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const links = ["Quem Somos", "Acomodações", "Gastronomia", "Contato"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-sand/80 backdrop-blur-sm flex justify-between items-center px-8 md:px-20 py-0 transition-all duration-500">
      <div className="heading-font text-2xl font-light tracking-[0.2em] uppercase text-earth-dark my-8">
        {/*<Image src="/logo.png" alt="Logo" width={150} height={50}/>*/}
        [LOGO]
      </div>

      <div className="hidden md:flex gap-12">
        {links.map((item) => (
          <Link
            key={item}
            href="#"
            className="heading-font text-xs uppercase tracking-widest text-earth-dark/70 hover:text-earth-dark transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <Button
        className="hidden md:flex bg-earth-dark text-sand px-10 py-6 rounded-full heading-font text-xs uppercase tracking-widest font-semibold hover:bg-earth-muted transition-all duration-300 border-none cursor-pointer"
      >
        Reserve agora
      </Button>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "text-earth-dark hover:bg-earth-dark/10",
            })}
          >
            <Menu className="h-8 w-8" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-sand/60 backdrop-blur-sm border-none w-[300px] flex flex-col pt-20">
            <SheetTitle className="sr-only">Navegação</SheetTitle>
            <div className="flex flex-col gap-8 h-full mx-10">
              <div className="flex flex-col gap-6">
                {links.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="heading-font text-sm uppercase tracking-widest text-earth-dark hover:text-earth-dark/70 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <Button
                className="mt-4 bg-earth-dark text-sand w-full py-6 rounded-full heading-font text-xs uppercase tracking-widest font-semibold hover:bg-earth-muted transition-all duration-300 border-none cursor-pointer"
              >
                Reserve agora
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
