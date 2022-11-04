import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Web Developer", "Learner"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export {Type};