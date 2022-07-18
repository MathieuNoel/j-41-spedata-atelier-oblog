const bunyan = require('bunyan');

const streams = [{
    level: 'error', // C'est le niveau à partir duquel il s'occupera des messages
    path: './log/error.log',
    type: 'rotating-file',
    period: '1d', // daily rotation // for test use 10000ms
    count: 4, // keep 4 back copies
}];

// Sur tous les serveurs de productions on a accès a une variable d'environnement NODE_ENV qui
// contien la valeur "production" on peut donc utiliser cette variable pour savoir s'il on est en
// production ou non
if (process.env.NODE_ENV !== 'production') {
    // Si ce n'est pas le cas on affiche les messages en console.
    streams.push({
        level: 'info',
        stream: process.stdout,
    });
}

module.exports = bunyan.createLogger({
    name: 'ocolis',
    streams,
});
