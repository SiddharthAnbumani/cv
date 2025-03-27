export default function VideoComponent({source}){
    return (
        <div className="">
            <video width="640" height="360" autoplay controls className="rounded-md m-5">
                <source src={source} type="video/mp4" />
            </video>
        </div>
    )
}