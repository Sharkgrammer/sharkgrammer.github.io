function VidPreview({video} : {video:any}) {

    return (
        <div className="cursor-pointer select-none bg-4-pane-background text-4-text-dim p-4 border-2 border-4-background active:bg-4-shadow-light">
            <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}/>

            <div className="pr-5">
                <p className="truncate text-ellipsis">{video.title}</p>
            </div>
        </div>
    )
}

export default VidPreview
