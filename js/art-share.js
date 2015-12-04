/* return all users
 : view the JSON response from this directly: http://art-share.herokuapp.com/api/v1/users/
 */
var returnUsers = function(){
	$.ajax({
		type: 'GET',
		url: 'http://art-share.herokuapp.com/api/v1/users/'
	}).success(function(data){
		console.log('all users: ', data.result);
	}).error(function(error){
		console.log('error msg: ', error);
	});
};


// Create a User
var createUser = function(email){
	$.ajax({
		type: 'POST',
		url: 'http://art-share.herokuapp.com/api/v1/users/',
		data: {
			user: {
				fname: 'Test',
				lname: 'Johnson',
				password: 'passw0rd',
				email: email
			}
		}
	});
};

// login with the user you just created
var loginUser = function(email){
	$.ajax({
		type: 'POST',
		url: 'http://art-share.herokuapp.com/api/v1/sessions/new',
		data: {
			email: email,
			password: 'passw0rd'
		}
	}).success(function(data){
		console.log('successful login. Here\'s the user:', data.result);
	});
};



// Create a painting for the user you just created, (pass in your users ID)
var addPainting = function(userId){
	$.ajax({
		type: 'POST',
		url: 'http://art-share.herokuapp.com/api/v1/users/' + userId + '/paintings/',
		data: {
			painting: {
				image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bantam_Rooster.jpg/589px-Bantam_Rooster.jpg',
				name: 'Rooster'
			}
		}
	}).success(function(response){
		console.log('Added a painting!: ', response.result);
	}).error(function(error){
		console.log('Error: ', error);
	});
};

// List paintings for the user you just created (pass in your user ID)
var listAllPaintings = function(userId){
	$.ajax({
		type: 'GET',
		url: 'http://art-share.herokuapp.com/api/v1/users/' + userId + '/paintings/'
	}).success(function(response){
		console.log(response.result);
	}).error(function(response){
		console.log('error: ', response);
	});
};


/* --------------------------------------------------------------
MORE functions from the API
-------------------------------------------------------------- */

// Get currently Logged in user
// Doesn't work outside of art-share domain!?!?
var getCurrentUser = function(){
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'http://art-share.herokuapp.com/api/v1/sessions/'
	}).success(function(response){
		console.log('success: ', response);
	});	
};


/* Delete a users painting */
// var deletePainting = function(userId, paintingId){
// 	$.ajax({
// 		type: 'DELETE',
// 		url: 'http://art-share.herokuapp.com/api/v1/users/' + userId + '/paintings/' + paintingId
// 	}).success(function(response){
// 		console.log('Deleted a painting: ', response.result);
// 	});
// };

/* Delete a user */
// var deleteUser = function(){
// 	$.ajax({
// 		type: 'DELETE',
// 		url: 'http://art-share.herokuapp.com/api/v1/users/10'
// 	}).success(function(response){
// 		console.log('Deleted a user: ', response);
// 	});
// };



















