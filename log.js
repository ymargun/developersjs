const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const isEmptyObject = obj => Object.keys(obj).length === 0;