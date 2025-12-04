/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "downloads.ctfassets.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**.ctfassets.net",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
