use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
      name: "Andrew Wyper",
      email: "wyper@wyper.co.uk",
      status: "Pending"
  },
  {
      name: "Steve Vance",
      email: "vance@vance.co.uk",
      status: "Checked-In"
  },
  {
      name: "Nicole Kidman",
      email: "kidman@kidman.co.uk",
      status: "Pending"
  }
]);
