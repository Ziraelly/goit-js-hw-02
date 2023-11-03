function getElementWidth(content, padding, border) {
    const parseContent = parseFloat(content);
    const parsePadding = parseFloat(padding);
    const parseBorder = parseFloat(border);
    const fullWidth = parseContent + parsePadding * 2 + parseBorder * 2;
    return Math.round(fullWidth * 10) / 10;
}

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
