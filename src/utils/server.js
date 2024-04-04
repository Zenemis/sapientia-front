const serverIp = "https://api.learn-sapientia.com";
const serverPort = "3000";

async function APICall(url, data) {
    try {
        const response = await fetch(`${serverIp}:${serverPort}/${url}`, {
            method: "POST", 
            // mode: "cors", 
            cache: "no-cache", 
            // credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(data), 
        });

        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }

        return response.json(); 
    } catch (error) {
        return error;
    }
}

export { APICall };
