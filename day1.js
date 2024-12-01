const fs = require('fs');

// Read the file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Process the data
    const lines = data.trim().split('\n'); // Split the file content into lines
    const arr1 = [];
    const arr2 = [];
    const frequencyMap = {};

    lines.forEach(line => {
        const [a, b] = line.trim().split(/\s+/).map(Number); // Split line by whitespace and convert to numbers
        arr1.push(a);
        // arr2.push(b);
        frequencyMap[b] = (frequencyMap[b] || 0) + 1;
    });

    // arr1.sort();
    // arr2.sort();

    let ans = 0;
    const n = arr1.length;
    for (let i = 0; i < n; i++) {
        if (arr1[i] in frequencyMap)
            ans += (arr1[i] * frequencyMap[arr1[i]]);
    }
    console.log(ans);
});
