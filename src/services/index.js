export default {
    userMatches
}

function userMatches(users, user) {
    let myFullName = (user.name.first + user.name.last).toLowerCase();
    let myAge = user.dob.age;
    const myCharMap = calcDuplicateChar(myFullName);
    let matches = users.map(otherUser => {
        if(user.cell !== otherUser.cell) {
            let otherFullName = (otherUser.name.first + otherUser.name.last).toLowerCase();
            let otherAge = otherUser.dob.age;
            const otherCharMap = calcDuplicateChar(otherFullName);
            const totalCountMap = calcDuplicateInTwoStrings(myCharMap, otherCharMap);
            const totalCount = calcRepeatedChars(totalCountMap);
            const match = clalMatch(myAge, otherAge,totalCount)
            return { 
                    name: otherUser.name.first + ' ' + otherUser.name.last,
                    value: match
                }
        }
    })
    matches.sort(compareByMatch);
    matches.pop();
    return matches;
}

function calcDuplicateChar(string) {
    let charCount = {};
    for (let i = 0; i < string.length; i++) {
        if( charCount[string.charAt(i)] === undefined ) {
            charCount[string.charAt(i)] = 1;
        } else {
            charCount[string.charAt(i)] ++;
        }
    }
    return charCount
}

function calcDuplicateInTwoStrings(myCharCount, otherCharCount) {
    let totalCount = [];
    for (let char in myCharCount) {
        if (myCharCount.hasOwnProperty(char)) {
            for (let otherChar in otherCharCount) {
                if (otherCharCount.hasOwnProperty(otherChar)) {
                    if(char === otherChar) {
                        totalCount[char] = myCharCount[char] + otherCharCount[otherChar]
                    }
                }
            }
        }
    }
    return totalCount
}

function calcRepeatedChars(totalCount) {
    let counter = 0;
    for (let char in totalCount) {
        if (totalCount.hasOwnProperty(char)) {
            counter += totalCount[char];
        }
    }
    return counter;
}

function clalMatch(myAge, OtherAge, totalCount) {
    return totalCount / (Math.abs(myAge - OtherAge) / 10);
}

function compareByMatch( a, b ) {
    if ( a.value < b.value ) {
      return -1;
    }
    if ( a.value > b.value ){
      return 1;
    }
    return 0;
}