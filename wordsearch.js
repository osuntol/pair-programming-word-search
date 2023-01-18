const wordSearch = (letters, word) => { 

    if (letters.length === 0) {
        if (word === "") {
            return true;
        }
        return false;
    }

    
    const horizontalJoin = letters.map(ls => ls.join(''));
    console.log("horizontalJoin", horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    let verticalMatrix = [];

    for (let i = 0; i < letters[0].length; i++) {
        verticalMatrix.push([]);
    }

    

    for (let col = 0; col < letters[0].length; col++) {
        for (let row = 0; row < letters.length; row++) {
            verticalMatrix[col].push(letters[row][col]);
        }
    }
    
    const verticalJoin = verticalMatrix.map(ls => ls.join(''));
    console.log("verticalJoin", verticalJoin);
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch
