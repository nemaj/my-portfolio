import classNames from "classnames";

const About = (props) => {
  const { scrollPosition } = props;

  return (
    <section
      className={classNames(
        "section-container py-[150px] context-fade",
        scrollPosition > 20 && scrollPosition < 40 ? "fade-in" : "fade-out"
      )}
    >
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
        ABOUT
      </h2>
      <p
        className="text-white text-lg sm:text-2xl md:text-3xl opacity-90 w-4/5 m-auto"
        style={{ lineHeight: "1.7em" }}
      >
        Hi, I'm Jamen Mama, I am a Experienced Front-End Developer with 8+ years
        of expertise in building responsive and scalable web applications,
        high-performing solutions tailored to both user needs and business
        objectives.
      </p>
    </section>
  );
};

export default About;
