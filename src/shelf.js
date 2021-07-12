function shelfBook(book, shelf) {
  if (shelf.length < 3) {
  //add book to shelf
    shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  for (var index = 0; index < shelf.length; index++) {
    if (shelf[index].title === bookTitle) {
      shelf.splice(index, 1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var titles = [0,1,2];
  // Think we would do a conditional inside of a loop here?  IM OUT OF TIME!!!!!
}








module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
