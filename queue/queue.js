const { Queue } = require('bullmq');
const Redis = require('ioredis');

const connection = new Redis(); // default localhost:6379
const pulsaQueue = new Queue('pulsa', { connection });

module.exports = { pulsaQueue, connection };
