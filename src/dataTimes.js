
 const timetableData = [
  {
    _id: String(Math.random()),
    date: "04/12/2023",
    time: [
      {
        timeString: "07:00-10:40",
        status: { primaryStatus: "DISPATCHED", secondaryStatus: "PENDING" },
      },
    ],
  },
  {
    _id: String(Math.random()),
    date: "07/12/2023",
    time: [
      {
        timeString: "12:28-13:40",
        status: { primaryStatus: "PENDING", secondaryStatus: "PENDING" },
      },
    ],
  },
  {
    _id: String(Math.random()),
    date: "10/12/2023",
    time: [
      {
        timeString: "15:28-15:40",
        status: { primaryStatus: "CANCELED", secondaryStatus: "CANCELED" },
      },
    ],
  },
]

module.exports = { timetableData };