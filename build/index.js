
exports.development = () => {
	require('./dev');
};

exports.production = () => {
	require('./prod');
};