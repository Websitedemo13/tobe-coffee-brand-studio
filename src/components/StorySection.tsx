import { Button } from "@/components/ui/button";

const StorySection = () => {
  return (
    <section id="story" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M100 10 C60 40, 20 80, 40 120 C60 160, 80 180, 100 190 C120 180, 140 160, 160 120 C180 80, 140 40, 100 10Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M100 10 C60 40, 20 80, 40 120 C60 160, 80 180, 100 190 C120 180, 140 160, 160 120 C180 80, 140 40, 100 10Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-8">
            Chúng tôi là cà phê Việt
            <br />
            và Phong cách Việt Nam
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-lg mb-10">
            Tại TOBE chúng tôi tập trung mọi nguồn lực và đam mê để hướng đến chế biến sâu
            cà phê Việt Nam. Mang đến thị trường sản phẩm cà phê hảo hạng — tiện lợi và
            ngon thuần khiết.
          </p>
          <Button variant="outline" size="lg" className="px-10 py-6 text-sm font-heading font-semibold tracking-wide uppercase border-foreground text-foreground hover:bg-foreground hover:text-background">
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
