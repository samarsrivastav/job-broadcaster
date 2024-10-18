"use client";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "../src/3d-pin";
interface AnimatedPinDemoProps {
    companyName: string;
    ctc: string;
    cutoff: string;
    applyLink: string;
}
export function AnimatedPinDemo({ companyName, ctc, cutoff, applyLink }: AnimatedPinDemoProps) {
    return (
      <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
        <PinContainer title={companyName} href={applyLink}>
          <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/window.svg" alt="bgimg" onError={() => console.error("Failed to load bg.png")} />
            </div>
            <img
              src="/globe.svg"
              alt="cover"
              className="z-10 absolute bottom-0"
              onError={() => console.error("Failed to load globe.svg")}
            />
          </div>
  
          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">Cutoff- {cutoff}</h1>
  
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
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Apply
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </PinContainer>
      </div>
    );
  }
  
