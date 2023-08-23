import airports from "../../libs/airports.json";

export default (req, res) => {
  res.status(200).json(airports);
};
