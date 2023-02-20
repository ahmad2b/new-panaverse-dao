import Intro from "@/views/home/sections/Intro";
import Outcome from "@/views/home/sections//Outcome";
import Trainer from "@/views/home/sections//Trainer";
import FaceFuture from "@/views/home/sections//FaceFuture";
import LaunchCarrer from "@/views/home/sections//LaunchCarrer";
import EnrollCourses from "@/views/home/sections/EnrollCourses";
import ProgramNutshell from "@/views/home/sections//ProgramNutshell";
import Ending from "@/views/home/sections/Ending";

import StartX from "./sections/SectionX/StartX";
import OutcomeX from "./sections/SectionX/OutcomeX";
import TrainerX from "./sections/SectionX/TrainerX";
import FaceFutureX from "./sections/SectionX/FaceFutureX";
import LaunchCarrerX from "./sections/SectionX/LaunchCarrerX";
import EnrollCoursesX from "./sections/SectionX/EnrollCoursesX";
import ProgramNutshellX from "./sections/SectionX/ProgramNutshellX";
import EndX from "./sections/SectionX/EndX";

export default function Landing() {
  return (
    <div>
      <StartX />
      {/* <Intro /> */}
      <OutcomeX />
      {/* <Outcome /> */}
      <TrainerX />
      {/* <Trainer /> */}
      <FaceFutureX />
      {/* <FaceFuture /> */}
      <LaunchCarrerX />
      {/* <LaunchCarrer /> */}
      <EnrollCoursesX />
      {/* <EnrollCourses /> */}
      <ProgramNutshellX />
      {/* <ProgramNutshell /> */}
      <EndX />
      {/* <Ending /> */}
    </div>
  );
}
