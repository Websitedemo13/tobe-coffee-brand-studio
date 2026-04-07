import { Leaf, Flame, Package } from "lucide-react";

const steps = [
  {
    icon: Leaf,
    title: "Tuyển chọn hạt",
    description: "Hạt cà phê Arabica & Robusta tốt nhất từ Đắk Lắk, Lâm Đồng và các vùng cao nguyên Việt Nam.",
  },
  {
    icon: Flame,
    title: "Rang xay",
    description: "Rang thủ công theo profile riêng biệt, giữ trọn hương thơm và vị đậm đà đặc trưng.",
  },
  {
    icon: Package,
    title: "Đóng gói",
    description: "Công nghệ đóng gói hiện đại, bảo quản nguyên vẹn chất lượng đến tay người thưởng thức.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Quy trình
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Từ nông trại đến tách cà phê
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step, index) => (
            <div key={step.title} className="fade-in-up text-center relative" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center mx-auto mb-8 relative z-10">
                <step.icon size={40} className="text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-primary font-heading font-bold text-sm mb-2 block">
                0{index + 1}
              </span>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
