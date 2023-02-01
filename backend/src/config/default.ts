import 'dotenv/config';

let PORT, MONGODB_URI;
process.env.STATUS === 'production'
    ? (PORT = process.env.PROD_PORT,
        MONGODB_URI=process.env.PROD_MONGODB_URI
        )
    : (PORT = process.env.DEV_PORT,
        MONGODB_URI=process.env.DEV_MONGODB_URI
        )

const config = {
  PORT,
  MONGODB_URI,
};

export default config;