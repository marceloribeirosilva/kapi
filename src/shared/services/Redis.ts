import redis from 'redis';
import AppError from '@shared/errors/AppError';

const clientRedis = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS || undefined,
});

clientRedis.on('error', error => {
  throw new AppError(`Error fetching notifications - ${error}`, 500);
});

export const getRedis = (key: string): Promise<string | null> =>
  new Promise((resolve, reject) =>
    clientRedis.get(key, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    }),
  );

export const setRedis = (key: string, data: string): Promise<void> =>
  new Promise((resolve, reject) =>
    clientRedis.set(key, JSON.stringify(data), err => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }),
  );
