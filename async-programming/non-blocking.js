// We can use this trick to build a generic _non-blocking function_ that takes a
// callback defining a task and switches tasks if any others are available:

const nonBlocking = (callback) => {
    setTimeout(callback, 0);
}

[1000, 1500, 500].forEach(t => {
    console.log(`about to do nonBlocking for ${t}`);
    nonBlocking(() => console.log(`inside timer handler for ${t}`));
});
