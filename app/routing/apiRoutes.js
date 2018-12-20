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
            
         
        
       
        
    });
    app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        friendsData.length = [];
        
    
        res.json({ ok: true });
      })
    
    
};






  

  