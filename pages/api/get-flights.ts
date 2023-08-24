import flights from "../../libs/flights.json";
import moment from "moment";

export default (req, res) => {
  if (Object.keys(req.query).length > 0) {
    const { from, to, passenger, startDate, endDate } = req.query;
    const daySubs = moment(startDate).subtract("days", 1);
    const filterFlight = flights.filter(
      (el) =>
        el.from.airportCode === from &&
        el.to.airportCode === to &&
        el.passenger >= passenger &&
        moment(el.date).isAfter(daySubs) &&
        (endDate.length > 0
          ? moment(el.date).isBefore(endDate)
          : moment(el.date).isAfter(daySubs))
    );

    return res.status(200).json(filterFlight);
  } else {
    return res.status(200).json(flights);
  }
};
