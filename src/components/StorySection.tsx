import storyBrewing from "@/assets/story-brewing.jpg";

const StorySection = () => {
  return (
    <section id="story" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="fade-in-up overflow-hidden rounded">
            <img
              src={storyBrewing}
              alt="Pha cà phê TOBE"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={960}
              height={1080}
            />
          </div>

          {/* Content */}
          <div className="fade-in-up">
            <span className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
              Câu chuyện thương hiệu
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Tobe Pause —<br />
              Thảnh thơi từng phút giây
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-6">
              Mỗi tách cà phê TOBE là một khoảnh khắc dừng lại giữa nhịp sống hối hả.
              Chúng tôi tuyển chọn những hạt cà phê tốt nhất từ vùng cao nguyên Việt Nam,
              rang xay thủ công để mang đến hương vị đậm đà, tinh tế trong từng giọt.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              TOBE không chỉ là cà phê — đó là phong cách sống, là sự tự tin và bản lĩnh
              của người Việt trẻ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
