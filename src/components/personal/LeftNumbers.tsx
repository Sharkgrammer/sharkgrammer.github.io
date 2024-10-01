function LeftNumbers({amount}: { amount: number }) {

    // I actually can't believe the lack of options for using loops in a component
    // I mean, I can't loop from 1 to amount without generating an array?
    // ... I miss vue

    return (
        Array.from({length: amount}).map((_, i) => <span key={i}>{i + 1}</span>)
    )
}

export default LeftNumbers
