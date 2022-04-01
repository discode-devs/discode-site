import { FaPaperPlane } from "react-icons/fa"
import { BsCodeSlash } from "react-icons/bs"

function Invite() {
  return (
    <div className="max-w-lg w-full text-center m-auto">
      <a href="https://github.com/discode-devs/discode" target="_blank" className="px-5">
        <span className="mt-6 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer rounded-xl hover:animate-wiggle">
          <div className="flex flex-row items-center">
            <span className="mr-3">Source</span>
            <BsCodeSlash color="white" />
          </div>
        </span>
      </a>
      <a href="https://discord.com/api/oauth2/authorize?client_id=937476981321240626&permissions=139586825280&scope=bot%20applications.commands" target="_blank" className="px-5">
        <span className="mt-6 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer rounded-xl hover:animate-wiggle">
          <div className="flex flex-row items-center">
            <span className="mr-3">Invite</span>
            <FaPaperPlane color="white" />
          </div>
        </span>
      </a>
    </div>
  )
}

export default Invite;