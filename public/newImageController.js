var classBackground = angular.module('classBackground', []);

classBackground.controller('backgroundCtrl', function ($scope, $http) {
	$scope.changeBackground = function() {
		$http.post('/getNewImage', {query: $scope.value})
		.then(function(res) {
			var newImage = angular.element(document.querySelector('body'));
			newImage.css('background-image', 'url('+res.data.images[0].display_sizes[0].uri+')');
		})
		.catch(function(err) {
			console.log(err);
		})
	};
});