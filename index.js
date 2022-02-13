const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Editing Sequence 2",
        state: "Untitled.vpj",
        largeImageKey: "image",
        largeImageText: "Using Videopad Pro v 8.63",
    })

    console.log("RPC active");
})

rpc.login({
    clientId: "000000000000000"
})
