module.exports = {
    overRideMethods: [
        "debug",
        "info",
        "log",
        "warn"
    ],
    debugEnvironment: 'debug',
    productionEnvironment: 'production',
    trueValues: [1, "1", true, "true", "TRUE"],
    falseValues: [0, "0", false, "false", "FALSE"]
};
