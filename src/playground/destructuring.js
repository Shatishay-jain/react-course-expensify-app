//normal variables destructuring
const book = {
    Bookname : 'ego is the biggest enemy',
    author :'holiday',
    publisher :{
        name :'penguin'
    }
}
const { name : publisherName = 'selfpublisher'} = book.publisher;
console.log(publisherName);
//array desstructuring
const item =['coffee (hot)','2.00','2.50','3.00']
const [coffetype ='random', ,prize] =item;
console.log(`a medium ${coffetype} cose ${prize}`);