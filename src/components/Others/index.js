import classNames from "classnames";

const Others = (props) => {
  const { scrollPosition } = props;

  return (
    <section
      className={classNames(
        "section-container pt-[150px] pb-[500px] context-fade",
        scrollPosition >= 65 && scrollPosition < 90 ? "fade-in" : "fade-out"
      )}
    >
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
        STACKS
      </h2>
      <p className="text-white text-lg sm:text-2xl md:text-3xl opacity-80 leading-[50px]">
        React, Tailwind, Restful APIs, Redux, and more.
      </p>
    </section>
  );
};

export default Others;
