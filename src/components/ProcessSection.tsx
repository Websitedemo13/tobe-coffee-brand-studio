import storyBrewing from "@/assets/story-brewing.jpg";
import productBeans from "@/assets/product-beans.jpg";
import productCan from "@/assets/product-can.jpg";

const processSteps = [
  {
    image: storyBrewing,
    title: "Chuỗi cung ứng toàn diện từ nông trại",
    description:
      "Cà phê canh tác theo hướng hữu cơ, vườn cà phê dưới tán rừng che mát, chắn gió, có thảm nền thực vật. Vào vụ thu hoạch, quả cà phê chỉ được thu hái khi đạt độ chín cao.",
  },
  {
    image: productBeans,
    title: "Cà phê nhân xanh chất lượng cao",
    description:
      "Cà phê tươi tách sạch cành lá, tạp chất, được lên men kỹ lưỡng và phơi khô chậm. Quy trình chế biến ướt đảm bảo giữ trọn hương vị tự nhiên của hạt.",
  },
  {
    image: productCan,
    title: "Chế biến nâng cao",
    description:
      "Từ cà phê nhân xanh, TOBE tiếp tục chế biến sâu để tạo ra các sản phẩm hảo hạng. Hệ thống rang xay hiện đại giúp tạo ra sản phẩm giữ trọn hương vị nguyên thuỷ mà không sử dụng hương liệu hoá học.",
  },
];

const stats = [
  { value: "86+", label: "SCA Score" },
  { value: "500", label: "Nhà máy (m²)" },
  { value: "3", label: "Nông trại" },
  { value: "10+", label: "Nông hộ" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Zigzag blocks */}
        <div className="space-y-24 lg:space-y-32">
          {processSteps.map((step, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={step.title}
                className={`fade-in-up grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`overflow-hidden rounded ${isReversed ? "lg:order-2" : ""}`}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={960}
                    height={1080}
                  />
                </div>

                {/* Content */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-6">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-24 lg:mt-32 fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-border py-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-heading font-black text-4xl md:text-5xl text-primary block mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground font-light text-sm tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
