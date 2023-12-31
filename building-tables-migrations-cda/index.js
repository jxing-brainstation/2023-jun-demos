const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const userRoutes = require('./routes/user-routes');

// all users routes
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});