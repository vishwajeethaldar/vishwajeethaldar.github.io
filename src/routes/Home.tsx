import About from "##/src/components/about/About.tsx";
import Skills from "##/src/components/about//Skills.tsx";
import Experience from "##/src/components/about//Experience.tsx";
import Projects from "##/src/components/about//Projects.tsx";

function Home() {
    return (
    <div>
        <About />
        <Skills />
        <Experience />
        <Projects />
    </div>
    )
}

export default Home;