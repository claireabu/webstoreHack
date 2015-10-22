var ghost = {
	name: 'Ghost Written', 
	category: 'Fiction',
	picture_url: 'http://www.xray867.server4you.net/system/hd_covers/000/007/689/original/9780340739754.jpg?1391438776', 
	price: 10, 
	selling_points: ['Magical Realism across the globe', 'Short stories all woven together', 'Travel the world through David Mitchell\'s vision']
};
var vice = {
	name: 'Inherent Vice', 
	category: 'Psychedlic Noir', 
	picture_url: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Inherent_Vice_film_poster.jpg', 
	price: 15, 
	selling_points: ['Part noir, part psychedelic romp', 'a simple shaggy-dog detective story', 'Pynchon Lite']
}

var darkside = {
	name: 'The Dark Side of the Moon', 
	category: 'Progressive rock', 
	picture_url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png', 
	price: 17, 
	selling_points: ['Complex, revolutionary album', 'One contiguous song', 'One of the greatest albums of all time']

}; 
var settle = {
	name: 'Settle', 
	category: 'House', 
	picture_url: 'https://upload.wikimedia.org/wikipedia/en/7/76/Disclosure_-_Settle.png', 
	price: 17, 
	selling_points: ['Brings back intelligence to joyous dance-pop', 'Advanced rhythm combinations and soulful R&B vocal samples', 'There\'s not a song on here you can\'t jam to']

}; 

var res = "";


//update ghost
// $('#ghost .name').text(ghost.name); 
// $('#ghost .category').text(ghost.category); 
// $('#ghost .price').text('$' + ghost.price); 
// $('#ghost img').attr('src', ghost.picture_url);

// ghost.selling_points.forEach(function(elem){
// 	res = res + elem + '. '
// })
// $('#ghost .sellingpts').text(res)
// res = "";


//update vice
$('#vice .name').text(vice.name); 
$('#vice .category').text(vice.category); 
$('#vice .price').text('$' + vice.price); 
$('#vice img').attr('src', vice.picture_url);
vice.selling_points.forEach(function(elem){
	res = res + elem + '. '
})
$('#vice .sellingpts').text(res)
res = "";

//update darkside
$('#darkside .name').text(darkside.name); 
$('#darkside .category').text(darkside.category); 
$('#darkside .price').text('$' + darkside.price); 
$('#darkside img').attr('src', darkside.picture_url);	
darkside.selling_points.forEach(function(elem){
	res = res + elem + '. '
})
$('#darkside .sellingpts').text(res)
res = "";


//settle
$('#settle .name').text(settle.name); 
$('#settle .category').text(settle.category); 
$('#settle .price').text('$' + settle.price); 
$('#settle img').attr('src', settle.picture_url);
settle.selling_points.forEach(function(elem){
	res = res + elem + '. '
})
$('#settle .sellingpts').text(res)
res = "";	

//Refactor your code so that you can call a function add_to_page(book1), passing in an object, 
//and that object will be placed using jQuery into the html page. Now you should just call add_to_page 
//for each product and the add_to_page function will place it on the page for you.

var add_to_page = function (obj) {
	var id = obj.name;
	console.log(obj.name); 
	$('#'+ id + ' .name').text(obj.name.name); 
	$('#'+ id + ' .category').text(obj.name.category); 
	$('#'+ id + ' .price').text('$' + obj.name.price); 
	$('#'+ id + ' img').attr('src', obj.name.picture_url);
	id.selling_points.forEach(function(elem){
		res = res + elem + '. '
	})
	$('#'+ obj.name + '  .sellingpts').text(res)
	res = "";	

}


add_to_page(ghost); 
