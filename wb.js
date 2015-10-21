var ghost = {
	name: 'Ghost Written', 
	category: 'Fiction',
	picture_url: 'http://www.xray867.server4you.net/system/hd_covers/000/007/689/original/9780340739754.jpg?1391438776', 
	price: 10, 
	selling_points: ['Magical Realism across the globe', 'Short stories all woven together', 'Travel the world through David Mitchell\'s vision']
};
var tidy = {
	name: 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing', 
	category: 'Homecare', 
	picture_url: 'http://s3.amazonaws.com/media.wbur.org/wordpress/11/files/2014/12/1209_kondo-bookCover.jpg', 
	price: 15, 
	selling_points: ['Best-selling guide to decluttering your home', 'From Japanese cleaning consultant who\'s customers have never relapsed', 'Learn the legendary KonMari Method for simplifying, organizing, and storing']
};
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

	$(#ghost).text(ghost.name)
for(var key in ghost){


	if(key === 'name'){
		console.log(key, ghost[key]); 


	}else if(key === 'category'){
		console.log(key, ghost[key]); 

	}else if(key === 'picture_url'){
		console.log(key, ghost[key]); 

	}else if(key === 'price'){
		console.log(key, ghost[key]); 

	}else{
		console.log(key, ghost[key]); 
		
	}
}	