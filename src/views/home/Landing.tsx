import Intro from "@/views/home/sections/Intro";
import Outcome from "@/views/home/sections//Outcome";
import Trainer from "@/views/home/sections//Trainer";
import FaceFuture from "@/views/home/sections//FaceFuture";
import LaunchCarrer from "@/views/home/sections//LaunchCarrer";
import EnrollCourses from "@/views/home/sections/EnrollCourses";
import ProgramNutshell from "@/views/home/sections//ProgramNutshell";
import Ending from "@/views/home/sections/Ending";

export default function Landing() {
  return (
    <div>
      <Intro />
      <Outcome />
      <Trainer />
      <FaceFuture />
      <LaunchCarrer />
      <EnrollCourses />
      <ProgramNutshell />
      <Ending />
    </div>
  );
}
