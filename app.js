const addBox =document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box");
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector(".textarea"),
addBtn = popupBox.querySelector("button");
const notes=JSON.parse(localStorage.getItem("notes")||"()")

addBox.addEventListener("click",()=>{
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click",()=>{
    titleTag.value="";
    descTag.value="";
    popupBox.classList.remove("show");

});
//to click the add button it will store in the local storage
function showNotes()
{
    notes.forEach((note) => {
        let liTag=`<li class="note">
        <div class="details">
                <p>${note.title}</p>
                <span>${note.description}</span>
        </div>
        <div class="bottom-content">
                <span></span>
        <div class="settings">
                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="menu">
            <li><i class="uil uil-pen"></i>edit</li>
                <li><i class="uil uil-trash"></i>delete</li>
                </ul>
        </div>
        </div>
    </li>`
    });
}
showNotes();
addBtn.addEventListener("click",e=>{
    e.preventDefault();
    let noteTitle=titleTag.value,
    noteDesc=descTag.value;
    if(noteTitle||noteDesc){
        let noteInfo={
            title:noteTitle,description:noteDesc
        }
      
       notes.push(noteInfo);
       //saving notes to local storragge
       localStorage.setItem("notes",JSON.stringify(notes));
       closeIcon.click();
    }
    
   });