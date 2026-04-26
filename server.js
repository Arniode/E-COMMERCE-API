const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

dotenv.config();
const app = express();
app.use(express.json());

// DATABASE CONNECTION (The Handshake)
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('🚀 DATABASE CONNECTED SUCCESSFULLY!'))
    .catch(err => console.error('❌ Database Connection Error:', err));

app.use('/api/v1', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 INDUSTRIAL GRADE API RUNNING ON PORT ${PORT}`);
});