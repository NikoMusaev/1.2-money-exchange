// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if ( currency > 10000 ) return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if ( currency < 1 ) return {};
    var coins = {};
    var left = currency;

    if (left >= 50) {
        coins.H = Math.trunc(left / 50);
        left -= coins.H * 50;
    }
    if (left >= 25) {
        coins.Q = Math.trunc(left / 25);
        left -= coins.Q * 25;
    }
    if (left >= 10) {
        coins.D = Math.trunc(left / 10);
        left -= coins.D * 10;
    }
    if (left >= 5) {
        coins.N = Math.trunc(left / 5);
        left -= coins.N * 5;
    }
    if (left >= 1) {
        coins.P = Math.trunc(left / 1);
        left -= coins.P * 1;
    }

    return coins;

}
