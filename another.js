/**
 * Optimized Program to find the longest word in a given sentence.
 */
function solveProblem(sentence) {
    // Ensure it's a valid string
    const words = String(sentence || '').split(/\s+/);

    // Find the longest word length
    const maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);
    
    console.log(maxLength);
}

solveProblem();
solveProblem("testingItem");
solveProblem("   Hello    world  ");
solveProblem("A quick fox jumped over the little lazy dog.");