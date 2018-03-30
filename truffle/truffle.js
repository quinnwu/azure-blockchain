module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
	networks: {
		development: {
			host: "blkchnaffkqi.eastus.cloudapp.azure.com",
			port: 8545,
			network_id: "*",
			gas: 2900000
		}
	}
};
