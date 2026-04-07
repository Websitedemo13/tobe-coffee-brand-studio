import productDrip from "@/assets/product-drip.jpg";
import productBeans from "@/assets/product-beans.jpg";
import productCan from "@/assets/product-can.jpg";

const products = [
  {
    title: "Dòng Túi Lọc",
    subtitle: "Drip Bag Collection",
    description: "Tiện lợi, giữ trọn hương vị. Pha cà phê chất lượng mọi lúc mọi nơi.",
    image: productDrip,
    accentClass: "bg-primary",
  },
  {
    title: "Hạt & Bột",
    subtitle: "Pulse & Flow",
    description: "Hạt cà phê nguyên chất từ vùng cao nguyên, rang xay tươi mỗi ngày.",
    image: productBeans,
    accentClass: "bg-foreground",
  },
  {
    title: "Dòng Core",
    subtitle: "Tin Can Premium",
    description: "Cà phê đóng lon cao cấp. Đậm đà, tiện lợi, phong cách hiện đại.",
    image: productCan,
    accentClass: "bg-primary",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Sản phẩm
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Bộ sưu tập TOBE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="fade-in-up group bg-background rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className={`absolute top-4 left-4 ${product.accentClass} text-primary-foreground text-xs font-heading font-semibold tracking-wider uppercase px-3 py-1 rounded`}>
                  {product.subtitle}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="text-primary font-heading font-semibold text-sm tracking-wide hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  Khám phá →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
