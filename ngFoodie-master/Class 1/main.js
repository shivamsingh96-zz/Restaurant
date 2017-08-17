// Runs when HTML file is loaded
/*$('#user-email').on('input',function() {
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });*/

	var foodieApp = angular.module('foodieApp',['ngRoute']); // variable create kar raha h.
	foodieApp.config(function ($routeProvider) { //$scope is an object to which we can add a list of properties and functions.
		// each controller has its own $scope.
	$routeProvider
	.when('/',{ // '/' batata h ki root ki baat ho rahi h
	// login page ko call kar rahe h.
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		// home page ko call kar rahe h.
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		// restaurant page ko call kar rahe h.
		//The :id part in the URL is known as a route parameter
//This means that whatever value we put in after /restaurant/ will be available to AngularJS in the controller
//Let's actually see how we can catch this value



		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})


})


	foodieApp.controller('mainController',function($scope) { // controller application ko control krta h
		$scope.restaurants = [{

			// restaurants ki puri information h.

			name: 'Farzi Cafe',
			address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
			location: 'Connaught Place',
			category: 'Casual Dining, Bar',
			vote: '4.2',
			cuisines: 'Modern Indian',
			cost: '2200',
			hours: '12 Noon to 1 AM (Mon-Sun)',

			bestDish: {
			name: 'Ice cream',
			image: 'https://i.ytimg.com/vi/j70yTq2ysLQ/maxresdefault.jpg'
			},

			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
			id: '1'
				},
				{
					name: 'Kebabs & Curries Company',
			address: 'World Trade Park, JLN Marg, Malviya Nagar, Jaipur',
			location: 'Malviya Nagar, Jaipur',
			category: 'Casual Dining',
			vote: '4.3',
			cuisines: 'North Indian, Mughlai, Chinese',
			cost: '2000',
			hours: '11 AM to 11 PM (Mon-Sun)',

			bestDish: {
			name: 'Matar Paneer',
			image: 'https://i.ytimg.com/vi/yxJb-rEVAnE/maxresdefault.jpg'
			},

			image: 'https://b.zmtcdn.com/data/pictures/7/102497/b5b5864af33e6c39e8fa5612d068ca11_featured_v2.jpg',
			id: '2'
				},
				{
				name: 'Bindaas Restaurant',
			address: 'Kewal Complex, Near Hyderabad Gate, Banaras Hindu University Campus, Susuwahi, Lanka, Varanasi',
			location: 'Lanka , Varanasi',
			category: 'Casual Dining',
			vote: '3.2',
			cuisines: 'North Indian, South Indian, Chinese, Fast Food',
			cost: '500',
			hours: '10 AM to 10 PM (Mon-Sun)',

			bestDish: {
			name: 'Biryani',
			image: 'http://i.ndtvimg.com/i/2016-06/biryani_625x350_61466587453.jpg'
			},

			image: 'https://b.zmtcdn.com/data/pictures/5/22175/75664dc1f339b5243f05bde0c6f5612d_featured_v2.jpg',
			id: '3'
				},
				{
					name: 'Pizzeria Vaatika Cafe',
			address: 'B-1/178, Assi Ghat, Varanasi',
			location: ' Assi Ghat',
			category: 'QUICK BITES',
			vote: '3.8',
			cuisines: 'Pizza, Chinese',
			cost: '700',
			hours: '11 AM to 3 PM, 7 PM to 11 PM (Mon-Sun)',

			bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
			},

			image: 'https://b.zmtcdn.com/data/pictures/9/3900059/806d0abc424bfbfc5820d3079c8ebf29_top_thumb_620_314.JPG',
			id: '4'
				},
				{
					name: 'Roman Café Diner',
			address: '24, 2nd Floor, Swastik Plaza, Lanka, Varanasi',
			location: ' Lanka',
			category: 'CASUAL DINING,CAFÉ',
			vote: '4.0',
			cuisines: 'Continental, Cafe, North Indian, Italian, Asian, Mediterranean, Mexican',
			cost: '900',
			hours: '11 AM to 10:30 PM (Mon-Thu),11 AM to 11 PM (Fri-Sun)',

			bestDish: {
			name: 'Baked eggs with mushrooms',
			image: 'http://cdnwp.audiencemedia.com/wp-content/uploads/2016/10/725177-1-eng-GB_baked-eggs-with-mushrooms-spinach-etc-470x540.jpg'
			},
			image: 'https://b.zmtcdn.com/data/pictures/7/3900267/cc4247b7b1e92d7af5a206cd7277e945_featured_v2.jpg',
			id: '5'
				},
				{
					name: 'Tapri Central',
			address: 'B4 E, 3rd Floor, Surana Jewellers, Opposite Central Park, C Sc',
			location: 'C Scheme',
			category: 'CAFÉ,QUICK BITES',
			vote: '4.7',
			cuisines: 'Cafe, Fast Food, Street Food',
			cost: '750',
			hours: '7:30 AM to 9:45 PM (Mon, Wed, Thu, Fri, Sat, Sun)',

			bestDish: {
			name: 'Burger',
			image: 'http://dingo.care2.com/pictures/greenliving/1363/1362515.large.jpg'
			},

			image: 'https://b.zmtcdn.com/data/pictures/2/101212/d0eb4e8c9369acce53408dec3d6cf12e_featured_v2.jpg',
			id: '6'
				},
				{
					name: 'Peshawri - ITC Rajputana Hotel',
			address: 'ITC Rajputana Hotel, Palace Road, Gopalbari, Jaipur',
			location: 'Gopalbari',
			category: 'FINE DINING',
			vote: '4.3',
			cuisines: 'North Indian',
			cost: '3000',
			hours: '12:30 PM to 2:45 PM, 7:30 PM to 10:30 PM (Mon-Sun)',

			bestDish: {
			name: 'Tandoori Chicken',
			image: 'http://mongoliankitchen.com/wp-content/uploads/2011/08/MK-3552.jpg'
			},
			image: 'https://b.zmtcdn.com/data/pictures/1/100351/743ac36be4b60f87237eb53c4317b583_featured_v2.jpg',
			id: '7'
				},
				{
					name: 'Bahar Restaurant',
			address: 'Birla Market, Near Hindalco hospital, Renukoot',
			location: 'Birla Market',
			category: 'FINE DINING',
			vote: '4.8',
			cuisines: 'North Indian',
			cost: '1000',
			hours: '10:30 AM to 10:00 PM',

			bestDish: {
			name: 'Masala Dosa',
			image: 'http://www.ndtv.com/cooks/images/mysore.masala.dosa.1%20%281%29.jpg'
			},
			image: 'https://content2.jdmagicbox.com/comp/hyderabad/58/040ppe00358/catalogue/cafe-bahar-restaurant-hyderguda-basheer-bagh-hyderabad-fc142.jpg',
			id: '8'

			}]


	})



foodieApp.controller('loginController',function($scope, $location) { //The $location object helps us modify the URL of the webpage automatically.

	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})


foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//$routeParams object is actually a part of the ngRoute module we added in last Class
//What it does is give us access to all the route parameters (variables) as property of the object
//So the value of $routeParams.id is the value we specified in the URL
//The $http object that AngularJS provides make it easy to use the functionality of making HTTP requests without jQuery.
	$scope.restaurantId = $routeParams.id;

	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
			$scope.showMe = false;
			$scope.myFunc = function() {
					$scope.showMe = !$scope.showMe;
			}
	});

	var restaurants =  [{


name: 'Farzi Cafe',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Modern Indian',
cost: '2200',
hours: '12 Noon to 1 AM (Mon-Sun)',

bestDish: {
name: 'Ice cream',
image: 'https://i.ytimg.com/vi/j70yTq2ysLQ/maxresdefault.jpg'
},

image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		name: 'Kebabs & Curries Company',
address: 'World Trade Park, JLN Marg, Malviya Nagar, Jaipur',
location: 'Malviya Nagar, Jaipur',
category: 'Casual Dining',
vote: '4.3',
cuisines: 'North Indian, Mughlai, Chinese',
cost: '2000',
hours: '11 AM to 11 PM (Mon-Sun)',

bestDish: {
name: 'Matar Paneer',
image: 'https://i.ytimg.com/vi/yxJb-rEVAnE/maxresdefault.jpg'
},

image: 'https://b.zmtcdn.com/data/pictures/7/102497/b5b5864af33e6c39e8fa5612d068ca11_featured_v2.jpg'
	},
	{
	name: 'Bindaas Restaurant',
address: 'Kewal Complex, Near Hyderabad Gate, Banaras Hindu University Campus, Susuwahi, Lanka, Varanasi',
location: 'Lanka , Varanasi',
category: 'Casual Dining',
vote: '3.2',
cuisines: 'North Indian, South Indian, Chinese, Fast Food',
cost: '500',
hours: '10 AM to 10 PM (Mon-Sun)',

bestDish: {
name: 'Biryani',
image: 'http://i.ndtvimg.com/i/2016-06/biryani_625x350_61466587453.jpg'
},

image: 'https://b.zmtcdn.com/data/pictures/5/22175/75664dc1f339b5243f05bde0c6f5612d_featured_v2.jpg'
	},
	{
		name: 'Pizzeria Vaatika Cafe',
address: 'B-1/178, Assi Ghat, Varanasi',
location: ' Assi Ghat',
category: 'QUICK BITES',
vote: '3.8',
cuisines: 'Pizza, Chinese',
cost: '700',
hours: '11 AM to 3 PM, 7 PM to 11 PM (Mon-Sun)',

bestDish: {
name: 'Corn Pizza',
image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},

image: 'https://b.zmtcdn.com/data/pictures/9/3900059/806d0abc424bfbfc5820d3079c8ebf29_top_thumb_620_314.JPG'
	},
	{
		name: 'Roman Café Diner',
address: '24, 2nd Floor, Swastik Plaza, Lanka, Varanasi',
location: ' Lanka',
category: 'CASUAL DINING,CAFÉ',
vote: '4.0',
cuisines: 'Continental, Cafe, North Indian, Italian, Asian, Mediterranean, Mexican',
cost: '900',
hours: '11 AM to 10:30 PM (Mon-Thu),11 AM to 11 PM (Fri-Sun)',

bestDish: {
name: 'Baked eggs with mushrooms',
image: 'http://cdnwp.audiencemedia.com/wp-content/uploads/2016/10/725177-1-eng-GB_baked-eggs-with-mushrooms-spinach-etc-470x540.jpg'
},
image: 'https://b.zmtcdn.com/data/pictures/7/3900267/cc4247b7b1e92d7af5a206cd7277e945_featured_v2.jpg'
	},
	{
		name: 'Tapri Central',
address: 'B4 E, 3rd Floor, Surana Jewellers, Opposite Central Park, C Sc',
location: 'C Scheme',
category: 'CAFÉ,QUICK BITES',
vote: '4.7',
cuisines: 'Cafe, Fast Food, Street Food',
cost: '750',
hours: '7:30 AM to 9:45 PM (Mon, Wed, Thu, Fri, Sat, Sun)',

bestDish: {
name: 'Burger',
image: 'http://dingo.care2.com/pictures/greenliving/1363/1362515.large.jpg'
},

image: 'https://b.zmtcdn.com/data/pictures/2/101212/d0eb4e8c9369acce53408dec3d6cf12e_featured_v2.jpg'
	},
	{
		name: 'Peshawri - ITC Rajputana Hotel',
address: 'ITC Rajputana Hotel, Palace Road, Gopalbari, Jaipur',
location: 'Gopalbari',
category: 'FINE DINING',
vote: '4.3',
cuisines: 'North Indian',
cost: '3000',
hours: '12:30 PM to 2:45 PM, 7:30 PM to 10:30 PM (Mon-Sun)',

bestDish: {
name: 'Tandoori Chicken',
image: 'http://mongoliankitchen.com/wp-content/uploads/2011/08/MK-3552.jpg'
},
image: 'https://b.zmtcdn.com/data/pictures/1/100351/743ac36be4b60f87237eb53c4317b583_featured_v2.jpg'
	},
	{
		name: 'Bahar Restaurant',
address: 'Birla Market, Near Hindalco hospital, Renukoot',
location: 'Birla Market',
category: 'FINE DINING',
vote: '4.8',
cuisines: 'North Indian',
cost: '1000',
hours: '10:30 AM to 10:00 PM',

bestDish: {
name: 'Masala Dosa',
image: 'http://www.ndtv.com/cooks/images/mysore.masala.dosa.1%20%281%29.jpg'
},
image: 'https://content2.jdmagicbox.com/comp/hyderabad/58/040ppe00358/catalogue/cafe-bahar-restaurant-hyderguda-basheer-bagh-hyderabad-fc142.jpg'

}]


$scope.restaurant = restaurants[$routeParams.id - 1];
$scope.ingredients = [];
//We are just initializing the variable as an empty array
//Once we get values from the server, we'll start adding them to this array
$scope.getIngredients = function(url) { //we are catching the bestDish's image value in the 'url' variable here.
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key f49c57e98c4345d68f3870313f4f73ac',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
		//$http().then(function1,function2) does this
//It first makes the request, THEN runs the first function if it was successful
//Or runs the second function if there was an error
				var ingredients = response.data.outputs[0].data.concepts;
					for (var i =0;i < ingredients.length;i++) {
							$scope.ingredients.push(ingredients[i].name);//What this does is, add another element in the array at the END
							}
							//Here we are just running a loop through all the ingredients we got and pushing each value in the array
							//array.push(value)
							//Now, go to your restaurant page and click on the 'Get Ingredient' Button

		    		// $('.ingredients').html(list);
    		console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })

	}


})
