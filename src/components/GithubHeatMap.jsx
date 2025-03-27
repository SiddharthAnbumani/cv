import GitHubCalendar from "react-github-calendar";

export default function GitHubHeatmap() {
  return (
    <div className="w-screen xl:w-[90%] h-28 md:h-48 lg:h-56 xl:h-[300px] md:mx-20 flex justify-center items-center mt-3 md:mt-10 bg-black my-10 px-1 py-5 rounded-3xl">
      <div className="scale-40 sm:scale-90 md:scale-90 lg:scale-110 xl:scale-125 2xl:scale-150">
        <GitHubCalendar username="SiddharthAnbumani" />
      </div>
    </div>
  );
}