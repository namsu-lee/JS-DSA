var reorderLogFiles = function(logs) {
    const numbers = logs.filter(log => !Number.isNaN(Number(log.split(' ')[1])))
    const strings = logs.filter(log => Number.isNaN(Number(log.split(' ')[1])))

    strings.sort((a, b) => {
        const aBody = a.slice(a.indexOf(' ') + 1);
        const bBody = b.slice(b.indexOf(' ') + 1);

        if (aBody === bBody) return a.localeCompare(b)
        return aBody.localeCompare(bBody);
    })

    return [...strings, ...numbers]
};