interface props {
    top: boolean;
}

function Wave({top}: props) {

    return (
        <div>
            <img src={(top ? "/img/util/wave-top.svg" : "/img/util/wave-bot.svg")} className="wave"/>
        </div>
    )
}

export default Wave