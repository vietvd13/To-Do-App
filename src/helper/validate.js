export function IsEmptyOrWhiteSpace(str) {
    return (str.match(/^\s*$/) || []).length > 0;
}