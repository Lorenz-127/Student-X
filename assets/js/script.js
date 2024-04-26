// addTrailingZero function
const addTrailingZero = (num) => {
    return num < 10 ? "0" + num : num;
};

// Update time display
const updateTime = () => {
    const time = new Date(); // Get current time
    let hours = time.getHours(); // Get hours, minutes, and seconds
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = addTrailingZero(hours); // Add leading zero for single-digit numbers
    minutes = addTrailingZero(minutes);
    seconds = addTrailingZero(seconds);

    $("#hour").html(hours); // Update HTML elements with new time values
    $("#min").html(minutes);
    $("#sec").html(seconds);
};

// Call function on page load
updateTime();

// Call the function continuously to update the seconds display
setInterval(updateTime, 1000); // Every second