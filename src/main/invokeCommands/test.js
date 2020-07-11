const asyncTest = async (event, { testMessage }) => {
    return Promise.resolve(testMessage.toUpperCase());
}

const syncTest = (event, { testMessage }) => {
    return testMessage.toUpperCase();
}

module.exports = [
    {
        name: "asyncTest",
        callback: asyncTest
    },
    {
        name: "syncTest",
        callback: syncTest
    }
];