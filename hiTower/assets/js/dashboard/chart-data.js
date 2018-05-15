var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	var lineChartData = {
		labels : ["Janero","February","March","April","May","June","July","dcuapde"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),2000]
			},
			{
				label: "My Second dataset",
				fillColor : "rgba(189, 50, 70,0.2)",
				strokeColor : "#bd3246",
				pointColor : "#bd3246",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(48, 164, 255, 1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),15000]
			}
		]
    }

