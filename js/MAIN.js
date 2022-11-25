var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var addbutton= document.getElementById("addbutton");

var tbody= document.getElementById("tbody");

var bookmarks;
if (localStorage.getItem('bookmarks')==null) {

    bookmarks=[];
}else{
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    displaybooks();
}
    


addbutton.onclick = function () {
    var bookmark={
        name : nameInput.value,
        url : urlInput.value,
    }
    bookmarks.push(bookmark);
    // console.log(bookmarks);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    displaybooks();
    cleardata();
}

function displaybooks() {
    var marks='';
    for ( var i=0;i<bookmarks.length;i++) {
        marks +=`
        <tr>
        <td>${bookmarks[i].name}</td>
        <td> <a href=${bookmarks[i].url}><button type="button" class="btn btn-primary">visit</button></td>
        <td><button type="button" onclick="deletebook(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
        
    }
    tbody.innerHTML=marks
}
function deletebook(index) {
    bookmarks.splice(index,);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    displaybooks()
}
function cleardata() {
 nameInput.value = "";
 urlInput.value="";
}