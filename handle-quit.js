'use strict';

const { bold } = require('chalk');
const ON_DEATH = require('death')({ SIGHUP: true, uncaughtException: true })

let installed = false;
module.exports = (shutdown) => {
    if (installed) {
        throw new Error('Multiple uses of handle-quit are not allowed.');
    }

    installed = true;
    let hurry = false;

    const onSignal = (signal) => {
        if (hurry) {
            console.error(bold.red('\nShutting down immediately.'));
            process.exit(128 + (signal === 'SIGINT' ? 2 : 15));
        }

        hurry = true;

        console.log('\nShutting down. Please wait or hit CTRL+C to force quit.');

        shutdown();
    };

    process.on('SIGINT', onSignal);
    process.on('SIGTERM', onSignal);
};
