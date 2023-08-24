//a) Write a constructor for the class Movie,
 //which takes a String representing the title of the movie, 
 //a String representing the studio, 
 //and a String representing the rating as its arguments,
 //and sets the respective class properties to these values.

 class Tamilmovie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
let movie1 = new Tamilmovie("Love Today"," AGS Entertainment","PG13");
movie1.Title();
movie1.Studio();
movie1.Rating();


//b) The constructor for the class Movie will set 
//the class property rating to "PG" as default when no rating is provided.
class kannadamovie{
    constructor(title,studio,rating='PG'){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
let movie2 = new kannadamovie("KGF","Hombale Films");
movie2.Title();
movie2.Studio();
movie2.Rating();

    
//c) Write a method getPG, which takes an array of base type
// Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
// You may assume the input array is full of Movie instances.
 //The returned array need not be full.
 class Telugumovie{
    constructor(title,studio,rating='PG'){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
    }
class   movieNew extends Telugumovie {
   
getPG(){
      console.log(`only PG rating movies is "${this.title}" rating is"${this.rating}"`)
    }
 }
let movie3= new movieNew("RRR"," DVV Entertainment","PG13");
movie3.Title();
movie3.Studio();
movie3.Rating();
movie3.getPG();


//d) Write a piece of code that creates an instance of the class Movie
 //with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
 class Hollywoodmovie{
    constructor(title,studio,rating='PG'){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    }
var movie4=new Hollywoodmovie('Casino Royale','Eon Productions','PG13');
console.log(movie4)

    