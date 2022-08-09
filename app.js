// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
    // Each user div should have the users name, username, and city they are located in.
    // when a div is clicked on, it should fetch all posts associated with the user id.


const container = document.querySelector('#container')

getPost();

 function getPost(){
 let btn = document.querySelector('#btn');
 btn.addEventListener('click', grabPost)
    
}

function grabPost(){
    $('#btn').hide()
    $.get("https://jsonplaceholder.typicode.com/users", getUserData)
}

function getUserData(data){
   for (let i = 0; i < data.length; i++) {
        let userData = data[i];
        makeDivs(userData);
    }
}

function makeDivs(userData) {
    var name = userData.name;
    var userName = userData.username;
    var city = userData.address.city;
    var id = userData.id; 
    
    var mainContainer = document.createElement('div');
    mainContainer.className = 'user-container'
    mainContainer.id = id;
    // mainContainer.addEventListener('click', function(){
    //     console.log(mainContainer.id);
    // })
    mainContainer.append(`Name: ${name}`);
    
    container.append(mainContainer);
    
    mainContainer.addEventListener('click', getUserPost)

}

function getUserPost(e){
    $.get(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.id}`, accessPost)
}


function accessPost(post){
for (let j = 0; j < post.length; j++) {
    var titles = post[j].title;
    userPost(titles)
}   
    returnButton()
    $('.btn').hide();
}      


function userPost(titles){
    $('.user-container').hide();
    var postContainer = document.createElement('div');
    postContainer.className = 'post-container'
   $('.post-container').show();
    postContainer.append(titles)
    
    container.append(postContainer)
}


     function returnButton() {
      
    
       var returnButton = document.createElement('button');
       returnButton.className = 'returnBtn';
    
       returnButton.textContent = "Return"
    
        returnButton.addEventListener('click', function(){
    
            $('.btn').show();
            $('.returnBtn').hide();
            $('.user-container').show();
            $('#container').show();
            $('.post-container').empty();
    
            })
        container.append(returnButton);
       }
    
    
// example()

// function example() {
//     $.get([some url here], [some callback function that gets access to data here])
// }



