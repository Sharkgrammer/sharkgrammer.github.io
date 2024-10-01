// @ts-ignore - watch is fine where it is.
import watch from '../assets/img/views/video/watch.png';

function VideoView() {

    return (
        <div className="flex justify-center items-center">
            <div>
                <img src={watch} className={"max-h-[calc(100dvh)]"}/>
            </div>
        </div>
    )
}

export default VideoView
