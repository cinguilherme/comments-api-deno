import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";

const getRedisConnection = async () => {
  const redis = await connect({
    hostname: "127.0.0.1",
    port: 6379,
    password: "Redis2019!",
  });
  return redis;
};

export { getRedisConnection };
