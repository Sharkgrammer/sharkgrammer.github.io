interface DataLine {
    title: string;
    value: string,
    row: string,
    bracket: boolean,
    bracketBack: boolean,
    colon: boolean,
    comma: boolean,
    link: boolean,
    dash: boolean
}

// Takes a correctly formatted JSON file and displays it to the end user.
// The interface DataLine contains all recognized keys that can be used to customize the display.
function Formatter({data, lang}: { data: any, lang: string }) {

    function commaWrap(val: string) {

        switch (lang) {
            case "JSON":
                return `"${val}"`;
            case "YAML":
                return val;
            default:
                return val
        }
    }

    return (
        <div className="w-full">
            {data.map((line: DataLine, i: number) => (
                <div key={i} className="flex">
                    <div className="w-10 text-right">
                        <span className="text-1-text-dim">{i + 1}</span>
                    </div>

                    <div className="pl-5">
                        <span className={`whitespace-nowrap ${line.row}`}>

                            {line.dash && (
                                <span>{"- "}</span>
                            )}

                            {line.title && (
                                <span className="text-1-blue">{commaWrap(line.title)}</span>
                            )}

                            {line.colon && (
                                <span>: </span>
                            )}

                            {line.value && (
                                line.link ? (
                                    <a className="text-1-orange cursor-pointer select-auto"
                                       href={line.value}>{commaWrap(line.value.replace("mailto:", ""))}</a>
                                ) : (
                                    <span className="text-1-orange">{commaWrap(line.value)}</span>
                                )
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

export default Formatter
