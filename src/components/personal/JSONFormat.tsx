interface JSONLine {
    title: string;
    value: string,
    row: string,
    bracket: boolean,
    bracketBack: boolean,
    colon: boolean,
    comma: boolean,
}

function JSONFormat(props: any) {

    return (
        <div className="w-full">
            {props.data.map((line: JSONLine, i: number) => (
                <div key={i} className="flex">
                    <div className="w-10 text-right">
                        <span className="text-1-text-dim">{i + 1}</span>
                    </div>

                    <div className="pl-5">
                        <span className={`whitespace-nowrap ${line.row}`}>

                            {line.title && (
                                <span className="text-1-blue">"{line.title}"</span>
                            )}

                            {line.colon && (
                                <span>: </span>
                            )}

                            {line.value && (
                                <span className="text-1-orange">"{line.value}"</span>
                            )}

                            {line.bracket && (
                                <span>{"{ "}</span>
                            )}

                            {line.bracketBack && (
                                <span>{"} "}</span>
                            )}

                            {line.comma && (
                                <span>,</span>
                            )}
                        </span>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default JSONFormat
