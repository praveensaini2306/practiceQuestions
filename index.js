/**
 * Question: Program to find longest word in a given sentence ?
 */

// change this function argument and definition in your branch
function solveProblem (sentence) {
    sentence = String(sentence || '');

    const len = sentence.length;
    let maxLength = 0, counter = 0;

    for (let i = 0, ch; i < len; i++) {
        ch = sentence[i];

        if (ch === ' ') {
            maxLength = Math.max(maxLength, counter);
            counter = 0;
        } else {
            counter++;
        }
    }

    // if there is single word in the sentence
    if (!maxLength && counter) {
        maxLength = counter;
    }

    console.log(maxLength);
}

solveProblem();
solveProblem("testingItem");
solveProblem("   Hello    world  ");
solveProblem("A quick fox jumped over the little lazy dog.");