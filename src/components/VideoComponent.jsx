export default function VideoComponent({source1,source2}){
    return (
        <div className="">
            <video 
            width="640" 
            height="360" 
            autoPlay 
            muted
            controls 
            className="rounded-md m-5">
                <source src={source1} type="video/mp4" />
            </video>
            
            {source2? 
            <video 
            width="640" 
            height="360" 
            autoPlay 
            muted
            controls 
            className="rounded-md m-5">
                <source src={source2} type="video/mp4" />
            </video>
            :null}
        </div>
    )
}