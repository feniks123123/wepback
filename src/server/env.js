const nodeEnv = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? 'production' : 'development';
const isProd = nodeEnv === 'production';

module.exports = {
	nodeEnv,
	isProd
};