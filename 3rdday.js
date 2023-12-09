const original = 'abcd'
const modified = 'abcde'

function findNaughtyStep(original, modified) {
    let high = original;
    let low = modified;
    if (original.length < modified.length)
    {
        high = modified;
        low = original;
    }
    for (const letter in high) {
        if (high.charAt(letter) != low.charAt(letter))
            return (high.charAt(letter));
    }
    return '';
}

findNaughtyStep(original, modified) // 'e'
