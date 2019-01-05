// ===============================================================================
// LOAD DATA
// ===============================================================================
var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
// API GET Requests
// ------------------------------
    app.get('/api/friends', function (req, res){
        res.json(friends);
    });

    // API POST Requests
   // ---------------------------------------------------------------------------

    app.post('/api/friends', function (req, res) {
        console.log(req.body.scores);

    // Receive user details (name, photo, scores)          
    var userData = req.body;
   
    // parseInt for scores
    for(var i = 0; i < userData.scores.length; i++) {
    userData.scores[i] = parseInt(userData.scores[i]);
    console.log(userData.scores);
      }

      // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;
   

       //loop through the friends data array of objects to get each friends scores
       for (var i = 0; i < friends.length - 1; i++) {
           totalDifference = 0;

        //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
        for(var j = 0; j < friends[i].scores.length; j++) {
         // We calculate the difference between the scores and sum them into the totalDifference
         var difference = Math.abs(userData.scores[j] - friends[i].scores[j]);
         totalDifference += difference;
         console.log(totalDifference);
       }

               // If the sum of differences is less then the differences of the current "best match"
               if (totalDifference <= minimumDifference) {
                  
                // Reset the bestMatch to be the new friend.
                bestFriendIndex = i;
                minimumDifference = totalDifference;
              }
            }

           

       // The push method use to save user's data to the database
       friends.push(userData);



       //The res.json method will return a JSON data with the user's match which was looped through frieds data array.
       res.json(friends[bestFriendIndex]);
   });
};

   
    





  

  