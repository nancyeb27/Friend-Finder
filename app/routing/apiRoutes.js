// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ------------------------------
    
    app.get('/api/friends', function (req, res){
        res.json(friends);
        console.log (res);


    });

    // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

    app.post('/api/friends', function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
          
            
        };
            
    
        
       var userData = req.body;
       var userScores = userData.scores;
       // To take the results of the user's name and photo, other than the survey questions, to post and parse it
       var userName = userData.name;
       var userPhoto = userData.photo;



       // The variable used to calculate the difference b/n the user's socres and the scores of each user
       var totalDifference = 0;



       //loop through the friends data array of objects to get each friends scores
       for (var i = 0; i < friends.length - 1; i++) {
           console.log(friends[i].name);
           totalDifference = 0;



           //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
           for (var j = 0; j < 10; j++) {
               // We calculate the difference between the scores and sum them into the totalDifference
               totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
               // If the sum of differences is less then the differences of the current "best match"
               if (totalDifference <= bestMatch.friendDifference) {



                   // Reset the bestMatch to be the new friend.
                   bestMatch.name = friends[i].name;
                   bestMatch.photo = friends[i].photo;
                   bestMatch.friendDifference = totalDifference;
               }
           }
       }



       // The push method use to save user's data to the database
       friends.push(userData);



       //The res.json method will return a JSON data with the user's match which was looped through frieds data array.
       res.json(bestMatch);
   });
};

   
    





  

  