import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Skill from "@/components/Skill";
import Work from "@/components/Work";

export default function Home() {
  return (

    <div className="relative">
      <main className="relative z-5 bg-[#FEFDF8]">
          <Main />
          <Work />
          <Skill />
      </main>
      {/* <div className="h-[90vh] bg-transparent -z-50"> */}
      <div className="h-[calc(100vh-4.5rem)] bg-transparent -z-50">
      </div>
      <Footer />
    </div>
  )
}