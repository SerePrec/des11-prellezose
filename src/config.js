if (process.env.NODE_ENV !== "production") {
  const { config } = await import("dotenv");
  config();
}

const config = {
  PORT: process.env.PORT || 8080,
  mongoDb: {
    connectionString: "mongodb://localhost/des11",
    options: {
      useNewUrlParser: true, //No necesario desde mongoose 6
      useUnifiedTopology: true, //No necesario desde mongoose 6
      serverSelectionTimeoutMS: 5000
    }
  },
  mongoDbAtlas: {
    connectionString: process.env.MONGODB_ATLAS_URI,
    options: {
      useNewUrlParser: true, //No necesario desde mongoose 6
      useUnifiedTopology: true, //No necesario desde mongoose 6
      serverSelectionTimeoutMS: 5000
    }
  }
};

export default config;
