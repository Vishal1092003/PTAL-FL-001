import "./css/press.css";

const Presscoverage = () => {
  const logos = [
    { src: "/images/inc42.svg", alt: "Inc42" },
    { src: "/images/decor.svg", alt: "Decor" },
    { src: "/images/indianexpress.svg", alt: "Indian Express" },
    { src: "/images/vogue.svg", alt: "Vogue" },
    { src: "/images/outlook.svg", alt: "Outlook" },
    { src: "/images/bazzar.svg", alt: "Bazzar" },
  ];

  return (
    <section className="press-section">
      <div className="ticker_logo">
        <div className="marquee-wrapper">
          <div className="marquee-block">
            <div className="marquee-inner">
              {[...Array(3)].map((_, i) => (
                <div className="logo-track" key={i}>
                  {logos.map((logo, index) => (
                    <div className="marquee-item" key={`${i}-${index}`}>
                      <div className="logo-container">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="press-logo"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presscoverage;
