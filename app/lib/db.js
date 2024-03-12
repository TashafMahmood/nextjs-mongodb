const { MONGO_USERNAME, PASSWORD } = process.env

export const connectionString = `mongodb+srv://${MONGO_USERNAME}:${PASSWORD}@cluster0.wm7rrsk.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`