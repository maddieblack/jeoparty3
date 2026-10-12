const Filter = require('bad-words');
const wordsToNumbers = require('words-to-numbers').wordsToNumbers;

const ACRONYMS = require('../constants/acronyms').ACRONYMS;
const formatRaw = require('./format').formatRaw;

// Allow up to 2 typos, fewer for short answers so that e.g. 'car' doesn't match 'cat'
const allowedTypos = (answer) => {
    if (/^[0-9]+$/.test(answer) || answer.length <= 3) {
        return 0;
    }

    return answer.length <= 5 ? 1 : 2;
};

// Fewest edits (insert, delete, substitute) to turn pattern into any substring of text
const fuzzySubstringDistance = (pattern, text) => {
    let previous = new Array(text.length + 1).fill(0);

    for (let i = 1; i <= pattern.length; i++) {
        const current = [i];

        for (let j = 1; j <= text.length; j++) {
            const substitution = previous[j - 1] + (pattern[i - 1] === text[j - 1] ? 0 : 1);
            current[j] = Math.min(substitution, previous[j] + 1, current[j - 1] + 1);
        }

        previous = current;
    }

    return Math.min(...previous);
};

const isCloseMatch = (rawExpected, rawActual) => {
    // Numbers need to be exact
    if (/[0-9]/.test(rawExpected) || /[0-9]/.test(rawActual)) {
        return false;
    }

    return fuzzySubstringDistance(rawActual, rawExpected) <= allowedTypos(rawActual) ||
        fuzzySubstringDistance(rawExpected, rawActual) <= allowedTypos(rawExpected);
};

exports.checkAnswer = (categoryName, clue, expected, actual) => {
    const MIN_ANSWER_LENGTH = 3;

    const rawCategoryName = formatRaw(categoryName);
    const rawClue = formatRaw(clue);
    const rawExpected = formatRaw(wordsToNumbers(expected).toString());
    const rawActual = formatRaw(wordsToNumbers(actual).toString());

    // If expected answer is short (< 3 characters) then the actual answer can be short too
    const lengthLimit = rawExpected.length >= MIN_ANSWER_LENGTH ? MIN_ANSWER_LENGTH : 0;

    // If actual answer is a number then its length doesn't matter, otherwise it needs to respect the length limit
    const validLength = isNaN(rawActual) ? rawActual.length >= lengthLimit : true;

    const containsAnswer = rawExpected.includes(rawActual) || rawActual.includes(rawExpected) || isCloseMatch(rawExpected, rawActual);

    for (let acronym of Object.keys(ACRONYMS)) {
        const acronymArray = ACRONYMS[acronym];

        if (acronymArray.includes(rawExpected) && acronymArray.includes(rawActual)) {
            return true;
        }
    }

    const cheated = !rawCategoryName.includes(rawExpected) && rawCategoryName.includes(rawActual) || rawClue.includes(rawActual);

    return rawActual === rawExpected || validLength && containsAnswer && !cheated;
};

exports.checkPlayerName = (playerName) => {
    const filter = new Filter();

    if (playerName.length === 0) {
        return 'Your name is too short, please try again!';
    } else if (playerName.length > 20) {
        return 'Your name is too long, please try again!';
    }

    try {
        if (filter.clean(playerName) !== playerName) {
            return 'Do you kiss your mother with that mouth? Please try again!';
        }
    } catch (e) {
        return `That name caused an unknown error. Please try again!`;
    }

    return '';
};