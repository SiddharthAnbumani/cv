import GitHubCalendar from "react-github-calendar";

export default function GitHubHeatmap() {
  return (
    <div className="w-screen sm:h-auto md:mx-20 flex justify-center mt-10 bg-black rounded-3xl  py-16 scale-40 sm:scale-90 md:scale-90 lg:scale-110 xl:scale-125 2xl:scale-150">
      <GitHubCalendar username="SiddharthAnbumani" />
    </div>
  );
}
