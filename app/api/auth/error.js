export default function errorHandler(req, res) {
  res.status(401).json({ error: "Authentication error" });
}
