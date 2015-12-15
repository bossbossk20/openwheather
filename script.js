moment.locale('th');

angular.module('app', [])
  .controller('AppController', function($scope, $http) {
  	$scope.data = {};
	
		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi&units=metric&cnt=7?APPID=f82e59dc93a8b7f9e70b58a25535f590')
		.then(function(response){
			console.log(response.data);
			$scope.data = response.data;
		});
		
		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi,bansang&units=metric&cnt=7?APPID=f82e59dc93a8b7f9e70b58a25535f590')
		.then(function(response){
			console.log(response.data);
			$scope.data2 = response.data;
		});
		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi,nadi&units=metric&cnt=7?APPID=f82e59dc93a8b7f9e70b58a25535f590')
		.then(function(response){
			console.log(response.data);
			$scope.data3 = response.data;
		});

		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi,kabinburi&units=metric&cnt=7?APPID=f82e59dc93a8b7f9e70b58a25535f590')
		.then(function(response){
			console.log(response.data);
			$scope.data4 = response.data;
		});
		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi,Prachantakham&units=metric&cnt=7?APPID=f82e59dc93a8b7f9e70b58a25535f590')
		.then(function(response){
			console.log(response.data);
			$scope.data5 = response.data;
		});
		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi,SiMahaPhot&units=metric&cnt=7?APPID=f82e59dc93a8b7f9e70b58a25535f590')
		.then(function(response){
			console.log(response.data);
			$scope.data6 = response.data;
		});
		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi,Si%20Mahosot&units=metric&cnt=7?APPID=f82e59dc93a8b7f9e70b58a25535f590')
		.then(function(response){
			console.log(response.data);
			$scope.data7 = response.data;
		});
		

		$scope.formatDate = function(timestamp){
			var day = moment.unix(timestamp);
			return day.format('ll');
		};
	
		$scope.formatTemp = function(temp){
			return parseInt(temp);
		};
  });