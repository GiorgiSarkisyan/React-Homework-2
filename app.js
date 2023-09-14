// 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
// და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში.

const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("ინტერნეტს არ მოაქვს");
    }
    return response.json();
  })
  .then((data) => {
    const users = data;


    const usernames = users.map((user) => user.username);
    console.log(usernames);
  })
  .catch((error) => {
    console.error("ვერ დაfetchე", error);
  });

// 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
// და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
// მანქანის დეტალების შემაჯამებელ სტრიქონს.
class car {
   constructor(model,brand,releaseDate) {
   this.model = model
   this.brand = brand
   this.releaseDate = releaseDate
   }
   getCarDetails() {
    return (`I own ${this.brand} ${this.model}, it was released in  ${this.releaseDate}`)
}
}
const myCar = new car("Passat", "Volkswagen", 2017)
const myCarDetails = myCar.getCarDetails()
console.log(myCarDetails)
// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
// შექმენით კლასის პოსტი თვისებების ID,
// სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე.
class Post {
    constructor(id, title, text) {
      this.id = id;
      this.title = title;
      this.text = text;
    }
  }
  
  (async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("ჭედავს ინტერნეტი");
      const data = await response.json();
      const posts = data.map(({ id, title, body }) => new Post(id, title, body));
      console.log(posts);
    } catch (error) {
      console.error("ფეჩმა დაგიერორა ისევ სულელო", error);
    }
  })();
  

// 4. შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
// გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
//გამოიყენეთ filter მეთოდი!!
const person =  [{
    name: "giorgi",
    age: 17
},
{
    name: "sarke",
    age: 19
},
{
    name: "davita",
    age: 22
}];

const filteredPerson = person.filter(item => item.age >= 18);
console.log(filteredPerson);

// 5.ამ Todo API-დან https://jsonplaceholder.typicode.com/todos,
// შექმენით კლასი Todo,რომელშიც აღწერილი მექნება: ID, title და completed. 
// შემდეგ გაფილტრეთ მხოლოდ დასრულებული სამუშაოები Todo ობიექტების მასივში.
class Todo {
    constructor(id, title, completed) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }
  
  (async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) throw new Error("მართლა ტეხავს უკვე გაასწორე ეგ ინტერნეტი");
      const data = await response.json();
      
      const completedTodo = data
        .filter((todo) => todo.completed)
        .map(({ id, title, completed }) => new Todo(id, title, completed));
        console.log(completedTodo);
    } catch (error) {
      console.error("ფეჩმა დაგიერორა", error);
    }
  })();
  