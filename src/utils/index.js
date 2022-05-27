export function getPlatformType() {
    const platformType = localStorage.getItem('platformType');
    return platformType;
}

export function setPlatformType(platform) {
    localStorage.setItem("platformType", platform);
}

export function getPlatformURL() {
    const platformURL = localStorage.getItem('platformURL');
    return platformURL;
}

export function setPlatformURL() {
    const platformURL = localStorage.getItem('platformURL');
    return platformURL;
}

export function clearLocalStorage() {
    localStorage.removeItem("platformType");
}