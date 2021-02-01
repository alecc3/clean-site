import FadeIn from 'react-fade-in';

const Intro = () => {
  return(
    <div>
      <FadeIn transitionDuration="2250">
        <p style={{"font-family":"helvetica", "font-size":"30px", "letter-spacing": "-2px"}}>
          Hello, I'm Alec Chen.
        </p>
      </FadeIn>
      <p style={{"font-family":"helvetica", "font-size":"14px", "letter-spacing": "0px"}}>
        <p>
          I'm currently a Software Engineer at <a href="https://outlier.co/">Outlier</a>.
        </p>
        <p>
          On a break from school, but I study Computer Science + Sociology at University of California, Irvine.
        </p>
        <p>
          Previously, I worked at <a href="https://usa.visa.com/">Visa</a> and <a href="https://www.grailed.com/">Grailed</a>. I'm passionate about
          product, <a href="https://ctc-uci.com/">tech for social good</a>, and entrepreneurship.

        <p>
          Send me an email <a href="mailto:alecc3@uci.edu">here</a>, or find me on <a href="https://www.linkedin.com/in/alecc3/">LinkedIn</a>.
        </p>
        </p>
      </p>
    </div>
  )
};

export default Intro