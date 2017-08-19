

		/* We are storing the value returned by the angular.module() function here
		The first argument in function is the name of the app we mentioned in 'ng-app' directive
		The second parameter is an array of 'extra powers' we want to add to our app*/

	var foodieApp = angular.module('foodieApp',['ngRoute']); // variable create kar raha h.

	/* .config() is a function that allows us set-up our app in some way. '$routeProvider' is an object defined in ngRoute, it allows us to set-up routes */

	foodieApp.config(function ($routeProvider) { //$scope is an object to which we can add a list of properties and functions.
		// each controller has its own $scope.
	$routeProvider
	.when('/',{                           // '/' means the root route
		templateUrl: 'pages/login.html',   //URL of the route, The place where we have the template/view saved
		controller: 'loginController'     //The controller to use with that view
	})
	.when('/home',{                    // home page ko call kar rahe h.

		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {         // The :id part in the URL is known as a route parameter
		// restaurant page ko call kar rahe h.
		//The :id part in the URL is known as a route parameter
//This means that whatever value we put in after /restaurant/ will be available to AngularJS in the controller

		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	// route to my module or my project
	.when('/myModule', {
		templateUrl: 'pages/myModule.html',
		controller: 'moduleController'
	})
	// route to myDish with id
	.when('/dish/:id', {
		templateUrl: 'pages/myDish.html',
		controller: 'dishController'
	})
})


// controller for login view
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})


//controller for login view
foodieApp.controller('loginController',function($scope, $location) { //The $location object helps us modify the URL of the webpage automatically.

	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})

//controller for restaurant
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//$routeParams object is actually a part of the ngRoute module we added in last Class
//What it does is give us access to all the route parameters (variables) as property of the object
//So the value of $routeParams.id is the value we specified in the URL
//The $http object that AngularJS provides make it easy to use the functionality of making HTTP requests without jQuery.
$scope.ingredients = [];
//sending image to clarifai to get ingredients
//We are just initializing the variable as an empty array
//Once we get values from the server, we'll start adding them to this array
$scope.getIngredients = function(url) {
	//we are catching the bestDish's image value in the 'url' variable here.
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key bb6f14f82ab24374ac60508ef17f6823' ,
			'Content-Type': 'foodieApp'
		},
		'data': data
	}).then(function (response) {
		//$http().then(function1,function2) does this
//It first makes the request, THEN runs the first function if it was successful
//Or runs the second function if there was an error

				var ingredients = response.data.outputs[0].data.concepts;

					for (var i =0;i < ingredients.length;i++) {
							$scope.ingredients.push(ingredients[i].name);
							}
							//Here we are just running a loop through all the ingredients we got and pushing each value in the array
							//array.push(value)
							//Now, go to your restaurant page and click on the 'Get Ingredient' Button

		    		// $('.ingredients').html(list);
    		console.log(ingredients);
        }, function (xhr) {
        	console.log(xhr);
        })

	}

	$scope.restaurantId = $routeParams.id;

//array of object of restaurants
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

$scope.restaurant = restaurants[$routeParams.id - 1];
})

//"main controller" -name of the controller we want to create inside variable 'foodieApp', we are passing function which the controller will do.
//A controller manages the app's data

	foodieApp.controller('mainController',function($scope) {
		 // $scope is an object  to which we can add a list of properties and functions
		 //the prop. or function which are present in html file can be accessed though '$scoope.property' and $scope can be used inside the controller in which it is defined.
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

	// controller for mydish
	foodieApp.controller('dishController',function($scope,$routeParams,$http){
		$scope.ingredients = [];
		//$scope.fats = [];
		//$scope.prots = [];
		//$scope.carbs = [];
		// this is to send image to clarifai and get ingredients
		$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key bb6f14f82ab24374ac60508ef17f6823' ,
				'Content-Type': 'foodieApp'
			},
			'data': data
		}).then(function (response) {
				var ingredients = response.data.outputs[0].data.concepts;
				var fats= ["meat"];
		    var prots= ["egg"];
		    var carbs= ["samosa"];
	// this loop is checking that if dish is rich in which nutrient
		    for (var i=0;i< ingredients.length;i++) {

						if (ingredients[i].name == fats[0]) {
	           alert("This is rich in Fats");
						 break;
								}
						else if (ingredients[i].name == prots[0]) {
				           alert("This is rich in Protien");
									 break;
												}

		        else if (ingredients[i].name == carbs[0]) {
					           alert("This is rich in Carbohydrates");
										 break;
											 } }
	  			for (var i =0;i < ingredients.length;i++) {
						$scope.ingredients.push(ingredients[i].name);
	  			}



	    		// $('.ingredients').html(list);
	    		console.log(ingredients);
	        }, function (xhr) {
	        	console.log(xhr);
	        })

	}
		$scope.dishId = $routeParams.id;
		// array of objects for dishes
		var dishes = [{
			name: 'Butter Chicken',
			image:'https://i.ytimg.com/vi/a03U45jFxOI/maxresdefault.jpg',
			id: '1'
		},
	{
		name: 'Egg Curry',
		image:  'http://indianhealthyrecipes.com/wp-content/uploads/2016/01/egg-curry-recipe-12.jpg',
		id: '2'
	},
	{
		name: 'Samosa',
		image: 'https://i.ytimg.com/vi/iIVJN0Yz1Y0/maxresdefault.jpg',
		id: '3'
	}]
	$scope.dish = dishes[$routeParams.id-1];
	})
	foodieApp.controller('moduleController',function($scope){
		$scope.dishes = [{
			name: 'Butter Chicken',
			image:'https://i.ytimg.com/vi/a03U45jFxOI/maxresdefault.jpg',
			category: 'Non-Veg',
			id: '1'
		},
	{
		name: 'Egg Curry',
		image:  'http://www.arusuvai.com/sites/default/files/howto/2015/10/Fish-Curry.jpg',
		category: 'Non-Veg',
		id: '2'
	},
	{
		name: 'Samosa',
		image: 'https://i.ytimg.com/vi/iIVJN0Yz1Y0/maxresdefault.jpg',
	  category: 'Snacks',
		id: '3'
	}]

	})
