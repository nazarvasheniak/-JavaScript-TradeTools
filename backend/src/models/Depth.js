class Depth {
    constructor(lastUpdateId, asks = [], bids = []) {
        this.lastUpdateId = lastUpdateId;
        this.asks = asks;
        this.bids = bids;
    }
}

module.exports = Depth;