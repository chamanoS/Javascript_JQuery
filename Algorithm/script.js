function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    const charMap = {};

    for (let end = 0; end < s.length; end++) {
        if (charMap[s[end]] !== undefined && charMap[s[end]] >= start) {
            start = charMap[s[end]] + 1;
        }
        maxLength = Math.max(maxLength, end - start + 1);
        charMap[s[end]] = end;
    }

    return maxLength;
}
