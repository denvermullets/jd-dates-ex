// 1
// Write a function that:
// Takes a date string in YYYY-MM-DD format.
// Returns the date 7 days later in the same format.
const checkValidDate = (dateObj) => {
  if (Object.prototype.toString.call(dateObj) === "[object Date]") {
    if (isNaN(dateObj)) {
      console.error(`dateObj: ${dateObj}`);
      throw new Error("Invalid Date object found");
    }
  }

  return dateObj;
};

const sevenDaysLater = (currentDate) => {
  if (!currentDate) {
    throw new Error("Missing currentDate");
  }

  console.log("currentDate: ", currentDate);
  const oldDate = checkValidDate(new Date(currentDate));

  // if we want local time then we should pass it (YYYY, MM, DD)
  // this also would need further checks to make sure string is valid format
  // of course JS month is index based and not literal 🙄
  // const splitDate = currentDate.split("-");
  // const oldDate = checkValidDate(new Date(splitDate[0], Number(splitDate[1]) - 1, splitDate[2]));

  // should handle DST, returns MS
  const futureDate = oldDate.setDate(oldDate.getDate() + 7);

  const convertedDate = checkValidDate(new Date(futureDate)).toISOString().split("T")[0];
  console.log("convertedDate: ", convertedDate);

  return convertedDate;
};

// 2
// Write a function that:
// Takes two dates (startDate, endDate in YYYY-MM-DD format).
// Returns the number of weekdays (Mon-Fri) between them, inclusive.
// tbh, this solution was largely found on SO (the while loop)
const countDays = (startDate, endDate) => {
  if (!startDate || !endDate) {
    throw new Error("Missing startDate or endDate");
  }

  const startDateObj = checkValidDate(new Date(startDate));
  const endDateObj = checkValidDate(new Date(endDate));

  // verify start is actually before endDate
  if (endDateObj < startDateObj) {
    console.log("dayCount: ", 0);
    return 0;
  }

  const currentDate = new Date(startDateObj.getTime());

  let dayCount = 0;
  while (currentDate <= endDateObj) {
    const dayOfWeek = currentDate.getDay();
    // getDay() returns index value (0/6 are sun/sat)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) dayCount++;
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log("dayCount: ", dayCount);
  return dayCount;
};

// 3
// Given a Unix timestamp(milliseconds), return the current time in New York formatted as HH: mm: ss

// 4
// Write a function that:
// Returns the date of the next Sunday from today.
// If today is Sunday, return today’s date.
// Output format: YYYY-MM-DD.

// 5
// Write a function that calculates full months between two dates.

sevenDaysLater("2024-02-25");
countDays("2025-02-25", "2024-03-14");
