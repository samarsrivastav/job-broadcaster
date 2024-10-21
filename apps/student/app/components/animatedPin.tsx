"use client";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "@repo/ui/3d-pin";
import apply from "../lib/apply";
import { useRouter } from "next/navigation";
interface AnimatedPinDemoProps {
    companyName: string;
    ctc: string;
    cutoff: string;
    companyId:string;
    imgLink:string;
}
export function AnimatedPinDemo({ companyName, ctc, cutoff ,companyId,imgLink}: AnimatedPinDemoProps) {
    const router=useRouter()
    return (
      <div className="sm:h-[23rem] h-[22rem] flex items-center justify-center sm:w-[570px] w-[20vw]" onClick={async()=>{
        await apply(companyId)
        router.refresh()
      }}>
        <PinContainer title={companyName} >
          <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src={imgLink} alt="bgimg" onError={() => console.error("Failed to load bg.png")} />
            </div>
          </div>
  
          <h1 className="font-bold lg:text-2xl md:text-xl text-purple-50 line-clamp-1">Cutoff- {cutoff}</h1>

          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            CTC - {ctc}
          </p>
  
          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm text-purple-50">
                Apply
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </PinContainer>
      </div>
    );
  }
  
