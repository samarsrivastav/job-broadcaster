
import { getServerSession } from "next-auth";
import authOptions from "./lib/auth";
import {AnimatedPinDemo} from "./components/animatedPin"
import getCompany from "./lib/getCompany";
import { ResumeUpload } from "./components/resumeUpload";
import SignInPage from "./auth/signin/page";


export default async function Home() {
  const session=await getServerSession(authOptions)
  var college:any[]=[]
  if(!session){
    return (
      <SignInPage/>
    )
  }
  if(session){
    college=await getCompany()
  }
  return (
    <div className="user ">
      user-- 
      
      <div className="text-red-950">
        {JSON.stringify(session)}
      </div>
      <div className="my-10">

      </div>
      <div className="flex w-full h-full">
        {college.map((item)=>{
          return (
            <AnimatedPinDemo companyName={item.companyName} cutoff={item.cutoff} ctc={item.ctc} applyLink={item.link}/>
          )
        })}
      </div>
      <div>
        
      </div>
      <div>
        <ResumeUpload/>
      </div>
    </div>
  );
}
