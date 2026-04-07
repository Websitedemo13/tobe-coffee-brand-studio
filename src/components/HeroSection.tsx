import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroCoffee}
        alt="TOBE Coffee"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-primary-foreground tracking-tight leading-tight mb-6">
          BREW BOLD.
          <br />
          BE TOBE.
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 font-light mb-10 tracking-wide">
          100% Cà phê Việt Nam chất lượng cao
        </p>
        <Button variant="hero" size="lg" className="px-10 py-6 text-base">
          Mua ngay
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
