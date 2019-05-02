const config = require('./config');

module.exports.init = (options) => {

    let methods = options.methods || config.overRideMethods;
    let env = options.env || config.productionEnvironment;
    env = config.trueValues.indexOf(process.env[env]) < -1;
    if (!(methods instanceof Array)) {
        throw new Error("methods should be an array");
    }

    methods.forEach((method) => {
        console[method] = (function () {
            let func = console[method];
            return function () {
                let temp;
                try {
                    temp = process.stdout;
                    process.stdout = process.stderr;
                    if (!env) {
                        func.apply(console, arguments);
                    }
                } finally {
                    process.stdout = temp;
                }
            };
        })();
    });
};
