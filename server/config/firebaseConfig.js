// Initialising firebase
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// Service Account Key
const serviceProvider = process.env.GOOGLE_APPLICATION_CREDENTIALS;

initializeApp({
  credential: cert(serviceProvider),
});

const database = getFirestore();

module.exports = database;
