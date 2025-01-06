import heroImg from "./assets/hero.svg";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React and Next.js Projects</h1>
          <p>
            Welcome to my portfolio! Here, I showcase my journey in web
            development through a curated collection of React and Next.js
            projects. Each project demonstrates my expertise in building modern,
            responsive, and dynamic web applications. Explore my work to see how
            I bring ideas to life with code!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
