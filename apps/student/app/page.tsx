
import { getServerSession } from "next-auth";
import authOptions from "./lib/auth";
import SignInPage from "./auth/signin/page";
import { NavbarComponent } from "./components/Navbar";


export default async function Home() {
  const session=await getServerSession(authOptions)
  if(!session){
    return (
      <SignInPage/>
    )
  }
  return (
    <div>
      <NavbarComponent/>
      <div className="mt-4">
        <p className="text-sm text-gray-500">Session Information:</p>
        <pre className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
            {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
