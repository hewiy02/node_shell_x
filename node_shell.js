const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'8b0ff8eb-04e8-4add-9b6d-3dd85e26165c'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
