import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"BOB"}
          feedback={"Your Coding skills are so good."}
        />

        <TestimonialCard
          name={"Mike"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be that Alluring"
          }
        />

        <TestimonialCard
          name={"Harry"}
          feedback={"Amazing seems like you are good at your work"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
