module.exports = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: '/',
				destination: '/api',
				permanent: true,
			},
		];
	},
};