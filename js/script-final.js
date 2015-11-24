$(document).ready(function(){

	var doughnutGraph = $("#doughnut").get(0).getContext("2d");
	var barGraph = $("#bar").get(0).getContext("2d");

	var doughnutData = [
		{
			value: 230,
			color: "cornflowerblue",
			highlight: "lightskyblue",
			label: "JavaScript"
		},
		{
			value: 170,
			color: "red",
			highlight: "#D64343",
			label: "HTML"
		},
		{
			value: 100,
			color: "grey",
			highlight: "#9A9A9A",
			label: "CSS"
		}
	];

	var barData = {
		labels: ["Jurassic Park", "Rocky", "Fantastic Four", "Transformers", "Cars"],
		datasets: [
			{
				label: "First Movie",
				fillColor: "#FF782B",
				strokeColor: "#FF5D00",
				highlightFill: "#FF9A41",
				highlightStroke: "#FF902F",
				data: [93, 93, 37, 57, 74]
			},
			{
				label: "Last Movie",
				fillColor: "#416EFF",
				strokeColor: "#003CFF",
				highlightFill: "#66C7FF",
				highlightStroke: "#00A2FF",
				data: [71, 94, 10, 18, 39]
			}
		]
	}

	var chart = new Chart(doughnutGraph).Doughnut(doughnutData);
	var chart2 = new Chart(barGraph).Bar(barData);

	chart2.addData([93, 79], "Star Wars");

});