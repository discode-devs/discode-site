import image from "../images/botatar.png"
import Invite from "./Invite";

function Card() {
  return (
    <div className="w-full">
      <div className="max-w-3xl flex flex-col justify-center mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img className="w-44 mx-auto shadow-xl rounded-full drop-shadow-lg" src={image} alt="botatar" />
        </div>
      <div className="text-center mt-5">
        <p className="text-xl sm:text-2xl text-gray-900">
          Discode
        </p>
        <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto line-block border-b-2">
          A bot to help with coding
        </p>
        <Invite />
      </div>
      </div>
    </div>
  )
}

export default Card;