function findEmailDomain(address) {
    return address.slice(address.lastIndexOf('@') + 1);
}
