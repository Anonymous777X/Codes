import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const PORT = 3000;

// __dirname replacement in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/latest-launch', async (req, res) => {
  try {
    const latestLaunch = await axios.get('https://api.spacexdata.com/v4/launches/latest');
    const allLaunches = await axios.get('https://api.spacexdata.com/v4/launches');
    const rocket = await axios.get(`https://api.spacexdata.com/v4/rockets/${latestLaunch.data.rocket}`);
    const launchpad = await axios.get(`https://api.spacexdata.com/v4/launchpads/${latestLaunch.data.launchpad}`);

    const data = {
      launchName: latestLaunch.data.name,
      launchDate: latestLaunch.data.date_utc,
      rocketName: rocket.data.name,
      launchpadName: launchpad.data.name,
      totalLaunches: allLaunches.data.length
    };

    res.send(data);
  } catch (error) {
    console.error("Error fetching SpaceX data:", error.message);
    res.status(500).send("Server error");
  }
});
app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}`);
});
