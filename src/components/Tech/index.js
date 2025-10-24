import classNames from "classnames";

const Tech = (props) => {
  const { scrollPosition } = props;

  return (
    <section
      className={classNames(
        "section-container pt-[150px] pb-[200px] context-fade",
        scrollPosition >= 40 && scrollPosition < 65 ? "fade-in" : "fade-out"
      )}
    >
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
        PREPERED TECH
      </h2>
      <p className="text-white text-lg sm:text-2xl md:text-3xl opacity-80 leading-[50px] w-3/5 m-auto">
        ReactJS, VuewJS, Tailwind, Restful APIs, Redux, Javacript, Sass and
        more.
      </p>
    </section>
  );
};

export default Tech;
