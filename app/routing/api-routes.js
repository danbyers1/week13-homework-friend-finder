var humans = require("../data/humans.js");

module.exports = function(app){

	app.get("/api/humans", function(req, res){
		res.json(humans);
	});

	app.post("/api/humans", function(req, res){
		var matchHuman = {
			name: "",
			photo: "",
			humanDiff: 100
		};

		console.log(req.body);

		var humanData = req.body;
		var humanScores = humanData.scores;

		console.log(humanScores);

		var totalDifference = 0;

			for(var i = 0; i < humans.length; i++){
				console.log(humans[i]);
				totalDifference = 0;

				for(var j = 0; j < humans[i].scores[j]; j++){
					totalDifference += Math.abs(parseInt(humanScores[j]) - parseInt(humans[i].scores[j]));

				if(totalDifference <= matchHuman.humanDiff) {

					matchHuman.name = humans[i].name;
					matchHuman.photo = humans[i].photo;
					matchHuman.humanDiff = totalDifference;

				}

				}
			}

			humans.push(humanData);

			res.json(matchHuman);

	});
}
