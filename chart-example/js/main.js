window.addEventListener('load',init);

function init(){
	$.ajax({
	    url: 'data/data.json',
	    type: 'GET',
	    failure: function(err){
	    	console.log ("Could not get the data");
	    	return alert("Something went wrong");
	    },
	    success: function(data) {
	    	console.log(data);
	    	setChartDefaults();
	    	buildBarChart(data);
	    	buildBarChart2(data);
	    	buildBarChart3(data);
	    	buildBarChart4(data);
	    	buildBarChart5(data);
	    }
	});
}

// set default options for ALL charts
// see 
function setChartDefaults(){
	// make it responsive
	Chart.defaults.global.responsive = true;
	// set the font color
	Chart.defaults.global.defaultFontColor = '#222';
	// set the font family
	Chart.defaults.global.defaultFontFamily = 'Arial, Helvetica, sans-serif';
	
}

// chart for whole words 
function buildBarChart(data){

	// first, let's prepare the data
	// let's pull out the labels we need; i.e. the state names
	var labelsArray = ["First Debate", "Second Debate" ];
	// data.overallWordsDebateOne.forEach(function(e){
	// 	labelsArray.push(e.state)
	

	//let's pull out the hillary stats we need
	var hillaryArray = [6330,5903 ];
	// data.overallWordsDebateOne.forEach(function(e){
	// 	hillaryArray.push(e.hillary);
	// })

	//let's pull out the trump stats we need
	var trumpArray = [8419,6955];
	// data.overallWordsDebateOne.forEach(function(e){
	// 	trumpArray.push(e.trump);
	// })

	// now, let's make the chart
	// a chart can take 2 objects:
	// 1. data - the data/information (required)
	// 2. options - chart options (optional)
	var data = {
	    // chart labels
	    labels: labelsArray,
	    // array of datasets to plot
	    // could be only 1 if there's just 1 dataset
	    datasets: [
	        {
	            label: "Number of words Hillary Spoke",
	            backgroundColor: "#73ACFF",
	            data: hillaryArray
	        },
	        {
	            label: "Number of words Trump Spoke",
	            backgroundColor: "#CC143F",
	            data: trumpArray
	        }
	    ]
	};

	// create chart options (this is optional)
	// see list of options:
	// http://www.chartjs.org/docs/#bar-chart-chart-options
	var options = {
		// scaleShowLabels : false,
           scales: {
               yAxes: [{
               	display: false,
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
               xAxes: [{
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
           },
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#222',
				boxWidth: 12.5,
				padding: 20
			},
		},
    tooltips: {
        backgroundColor: '#222',
    },
	} 

	// first, get the context of the canvas where we're drawing the chart
	var ctx = document.getElementById("barChart1").getContext("2d");
	
	// now, create the bar chart, passing in:
	// 1. the type (required)
	// 2. the data (required)
	// 3. chart options (optional)
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    // type: 'horizontalBar', // horizontal bards
	    data: data,
	    options: options
	});
}

// chart for second debate
function buildBarChart2(data){

	// first, let's prepare the data
	// let's pull out the labels we need; i.e. the state names
	var labelsArray = [];
	data.HillDebateOneWords.forEach(function(e){
	// data.HillDebateTwoWords.forEach(function(f){
		labelsArray.push(e.word)
		// labelsArray.push(e.word2);
		
	})

	//let's pull out the hillary stats we need
	var hillaryArray = [];
	data.HillDebateOneWords.forEach(function(e){
		hillaryArray.push(e.used)
		// hillaryArray.push(e.used2);
	})

	// let's pull out the trump stats we need
	var hillaryArray2 = [];
	data.HillDebateOneWords.forEach(function(e){
		hillaryArray2.push(e.used2);
	})

	// now, let's make the chart
	// a chart can take 2 objects:
	// 1. data - the data/information (required)
	// 2. options - chart options (optional)
	var data = {
	    // chart labels
	    labels: labelsArray,
	    // array of datasets to plot
	    // could be only 1 if there's just 1 dataset
	    datasets: [
	        {
	            label: 'Number of times said by Clinton',
	            backgroundColor: "#73ACFF",
	            data: hillaryArray
	        },
	        // {
	        //     label: "Times Used Second Debate",
	        //     backgroundColor: "#ff5d40",
	        //     data: hillaryArray2
	        // }
	    ]
	};

	// create chart options (this is optional)
	// see list of options:
	// http://www.chartjs.org/docs/#bar-chart-chart-options
	var options = {
		    scales: {
               yAxes: [{
               	display: false,
                   gridLines: {
                       lineWidth: 0,
                       color: "2E3192"
                   }
               }],
               xAxes: [{
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
           },
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#222',
				boxWidth: 12.5,
				padding: 20
			},
		},
    tooltips: {
        backgroundColor: '#222',
    },
	} 

	// first, get the context of the canvas where we're drawing the chart
	var ctx = document.getElementById("barChart2").getContext("2d");
	
	// now, create the bar chart, passing in:
	// 1. the type (required)
	// 2. the data (required)
	// 3. chart options (optional)
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    // type: 'horizontalBar', // horizontal bards
	    data: data,
	    options: options
	});
}

// chart for trump 1st debate top words
function buildBarChart3(data){

	// first, let's prepare the data
	// let's pull out the labels we need; i.e. the state names
	var labelsArray = [];
	data.TrumpDebateOneWords.forEach(function(e){
		labelsArray.push(e.word)
	});
	var wordArray2 = [];
	data.TrumpDebateTwoWords.forEach(function(e){
		wordArray2.push(e.word)
	});


	//let's pull out the hillary stats we need
	// var hillaryArray = [];
	// data.HillDebateOneWords.forEach(function(e){
	// 	hillaryArray.push(e.used);
	// })

	//let's pull out the trump stats we need
	var trumpArray = [];
	data.TrumpDebateOneWords.forEach(function(e){
		trumpArray.push(e.used);
	});
	var trumpArraytwo = [];
	data.TrumpDebateTwoWords.forEach(function(e){
		trumpArraytwo.push(e.used);
	})

	// now, let's make the chart
	// a chart can take 2 objects:
	// 1. data - the data/information (required)
	// 2. options - chart options (optional)
	var data = {
	    // chart labels
	    labels: labelsArray,
	    // array of datasets to plot
	    // could be only 1 if there's just 1 dataset
	    datasets: [

	        {
	            label: 'Number of times said by Trump',
	            backgroundColor: "#CC143F",
	            data: trumpArray
	        },
	        // {
	        //     label: "Second Debate",
	        //     backgroundColor: "#ff5d40",
	        //     data: trumpArraytwo
	        // }
	    ]
	};

	// create chart options (this is optional)
	// see list of options:
	// http://www.chartjs.org/docs/#bar-chart-chart-options
	var options = {
           scales: {
               yAxes: [{
               	display: false,
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
               xAxes: [{
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
           },
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#222',
				boxWidth: 12.5,
				padding: 20

			},
		},
    tooltips: {
        backgroundColor: '#222',
    },
	} 

	// first, get the context of the canvas where we're drawing the chart
	var ctx = document.getElementById("barChart3").getContext("2d");
	
	// now, create the bar chart, passing in:
	// 1. the type (required)
	// 2. the data (required)
	// 3. chart options (optional)
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    // type: 'horizontalBar', // horizontal bards
	    data: data,
	    options: options
	});
}



// chart for hillary's 2nd debate words
// chart for second debate
function buildBarChart4(data){

	// first, let's prepare the data
	// let's pull out the labels we need; i.e. the state names
	var labelsArray = [];
	data.HillDebateTwoWords.forEach(function(e){
		labelsArray.push(e.word)
	});

	//let's pull out the hillary stats we need
	var hillaryArraytwo = [];
	data.HillDebateTwoWords.forEach(function(e){
		hillaryArraytwo.push(e.used);
	})

	//let's pull out the trump stats we need
	// var trumpArray = [];
	// data.overallWordsDebateOne.forEach(function(e){
	// 	trumpArray.push(e.trump);
	// })

	// now, let's make the chart
	// a chart can take 2 objects:
	// 1. data - the data/information (required)
	// 2. options - chart options (optional)
	var data = {
	    // chart labels
	    labels: labelsArray,
	    // array of datasets to plot
	    // could be only 1 if there's just 1 dataset
	    datasets: [
	        {
	            label: 'Number of times said by Clinton',
	            backgroundColor: "#73ACFF",
	            data: hillaryArraytwo
	        }
	        // {
	        //     label: "Donald Trump",
	        //     backgroundColor: "#ff5d40",
	        //     data: trumpArray
	        // }
	    ]
	};

	// create chart options (this is optional)
	// see list of options:
	// http://www.chartjs.org/docs/#bar-chart-chart-options
	var options = {
           scales: {
               yAxes: [{
               	display: false,
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
               xAxes: [{
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
           },
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#222',
				boxWidth: 12.5,
				padding: 20
			},
		},
    tooltips: {
        backgroundColor: '#222',
    },
	} 

	// first, get the context of the canvas where we're drawing the chart
	var ctx = document.getElementById("barChart4").getContext("2d");
	
	// now, create the bar chart, passing in:
	// 1. the type (required)
	// 2. the data (required)
	// 3. chart options (optional)
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    // type: 'horizontalBar', // horizontal bards
	    data: data,
	    options: options
	});
}



// chart for trump 2nd debate
function buildBarChart5(data){

	// first, let's prepare the data
	// let's pull out the labels we need; i.e. the state names
	var labelsArray = [];
	data.TrumpDebateTwoWords.forEach(function(e){
		labelsArray.push(e.word)
		})
	// });
	// var wordArray2 = [];
	// data.TrumpDebateTwoWords.forEach(function(e){
	// 	wordArray2.push(e.word)
	// });


	//let's pull out the hillary stats we need
	// var hillaryArray = [];
	// data.HillDebateOneWords.forEach(function(e){
	// 	hillaryArray.push(e.used);
	// })

	//let's pull out the trump stats we need
	// var trumpArray = [];
	// data.TrumpDebateOneWords.forEach(function(e){
	// 	trumpArray.push(e.used);
	// });
	var trumpArraytwo = [];
	data.TrumpDebateTwoWords.forEach(function(e){
		trumpArraytwo.push(e.used);
	})

	// now, let's make the chart
	// a chart can take 2 objects:
	// 1. data - the data/information (required)
	// 2. options - chart options (optional)
	var data = {
	    // chart labels
	    labels: labelsArray,
	    // array of datasets to plot
	    // could be only 1 if there's just 1 dataset
	    datasets: [

	        {
	            label: "Number of times said by Trump",
	            backgroundColor: "#CC143F",
	            data: trumpArraytwo
	        },
	        // {
	        //     label: "Second Debate",
	        //     backgroundColor: "#ff5d40",
	        //     data: trumpArraytwo
	        // }
	    ]
	};

	// create chart options (this is optional)
	// see list of options:
	// http://www.chartjs.org/docs/#bar-chart-chart-options
	var options = {
           scales: {
               yAxes: [{
               	display: false,
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
               xAxes: [{
                   gridLines: {
                       lineWidth: 0,
                       color: "rgba(255,255,255,0)"
                   }
               }],
           },
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#222',
				boxWidth: 12.5,
				padding: 20

			},
		},
    tooltips: {
        backgroundColor: '#222',
    },
	} 

	// first, get the context of the canvas where we're drawing the chart
	var ctx = document.getElementById("barChart5").getContext("2d");
	
	// now, create the bar chart, passing in:
	// 1. the type (required)
	// 2. the data (required)
	// 3. chart options (optional)
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    // type: 'horizontalBar', // horizontal bards
	    data: data,
	    options: options
	});
}

