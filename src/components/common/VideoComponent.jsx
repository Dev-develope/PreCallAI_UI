// import video from "./abc.mp4"
export default function VideoComponent() {
    // console.log(video, "---<<<")
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <video controls autoPlay autoFocus width="320" height="240"  >
                <source src="./abc.mp4" type="video/mp4" />
                <source src="./abc.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}
