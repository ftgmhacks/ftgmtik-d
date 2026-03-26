const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// All Origins allow karne ke liye aur CORS error khatam karne ke liye
app.use(cors());

app.get('/api/tiktok', async (req, res) => {
    const videoUrl = req.query.url;
    const targetApi = `https://api.siputzx.my.id/api/d/tiktok/v2?url=${videoUrl}`;

    try {
        const response = await axios.get(targetApi);
        
        // Pretty JSON Output with your Credits
        const finalData = {
            credits: "●▬▬▬▬๑۩۩๑▬▬▬▬▬● 𝗗𝗲𝘃 : 𝗥𝗮𝗻𝗮 𝗙𝗮𝗶𝘀𝗮𝗹 𝗔𝗹𝗶 𝗩𝗶𝘀𝗶𝘁 : https://ftgmtools.pages.dev 𝗡𝗮𝗺𝗲 : 𝗙𝗧𝗚𝗠 𝗛𝗔𝗖𝗞𝗦 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 : 923104882921 𝗩𝗶𝘀𝗶𝘁 𝗙𝗧𝗚𝗠 𝗧𝗢𝗢𝗟𝗦 𝗼𝗻 𝗴𝗼𝗼𝗴𝗹𝗲! ~~••~~••~~••~~••~~••~~~~••~~••~~••",
            status: true,
            result: response.data
        };

        // Pretty Preview ke liye spaces add kiye hain
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(finalData, null, 4));

    } catch (error) {
        res.status(500).json({ error: "API Fetching Error", message: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
