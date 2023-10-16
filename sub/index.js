const redis= require('redis');

const redisClient = redis.createClient({
    socket: {
        port: 46379
    }
});
redisClient.on('connect', () => {
    console.info('Redis PubSub connected!');
});
redisClient.on('error', (err) => {
    console.error('Redis PubSub Client Error', err);
});
redisClient.connect().then();

redisClient.subscribe('TEST_SUB_CHANNEL_NAME', (message) => {
    console.log('message : ', message);
})
console.log('채널 연결 완료');