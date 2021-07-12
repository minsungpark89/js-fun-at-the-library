//*********** createTitle CODE **********************
function createTitle(bookCloud) {
  return ('The ' + bookCloud);
};

//*********** buildMainCharacter CODE ***************
function buildMainCharacter(name, age, pronouns) {
  //create character object
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

//***************** saveReview CODE *********************
function saveReview(review, reviews) {
	// Loop through reviews, check if already exists
	for(var index = 0; index < reviews.length; index++) {
		if(reviews[index] === review) {
			return;
		}
	}
  // If we make it here, we can add
	reviews.push(review);
}

//************ calculatePageCount CODE **************
function calculatePageCount(title) {
  return title.length * 20;
}

//************** writeBook CODE *********************
function writeBook(bookTitle, bookCharacter, bookGenre) {

  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
}
//************ editBook ********************
function editBook(book) {
  book.pageCount = calculatePageCount(book.title) * 0.75;
  return;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
