import ScrollIntoView from "react-scroll-into-view"
import { FaChevronDown } from "react-icons/fa"

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-base sm:text-xl text-center text-gray-800 leading-relaxed mt-4 pb-10">
        Discode is a bot that provides information right from the comfort of discord. Just enter a command such as <span className="text-bold text-[#5865f2]">.lang c</span> and get information about the C programming language. It also provides information about people, frameworks, tools, and much more!
      </p>
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Learn More (Coming Soon)
      </p>
      <ScrollIntoView selector="#features">
        <div className="mx-auto p-10">
          <FaChevronDown className="animate-bounce mx-auto text-3xl" />
        </div>
  </ScrollIntoView>
    </div>
  )
}

export default About;