
// Simple Timeout
function scheduleMovieReminder(movie) {
    global.setTimeout(function() {
        console.log(`Remember to watch: ${movie}`);
    }, 1400);
    console.log(`Timer set for ${movie}`);
}

// scheduleMovieReminder("Citizen Kane");
// scheduleMovieReminder("Touch of Evil");
// scheduleMovieReminder("The Third Man");


// Timeout Plus Closure
function hammerTime(time) {
    global.setTimeout(function() {
        console.log(`${time} is hammertime!`);
    }, 1000);
}

//hammerTime(1111);



// Some tea? Some biscuits?

const readLine = require('readline');
const reader = readLine.createInterface({input : process.stdin,
                                         output : process.stdout});

function teaAndBiscuits() {
    let first, second;

    reader.question('Would you like some tea?\n', 
    function(response) {
        first = response;
        console.log(`You replied ${response}.\n`);

        reader.question('Would you like some biscuits?\n',
        function(response) {
            second = response;
            console.log(`You replied ${response}\n`)
            reader.close();
        });

    });
    
    reader.on('close', function() {
        const firstResponse = (first === 'yes') ? 'do' : 'don\'t';
        const secondResponse = (second === 'yes') ? 'do' : 'don\'t';
        console.log(`So you ${firstResponse} want tea and you ${secondResponse} want biscuits.`);
    });
}

teaAndBiscuits();





