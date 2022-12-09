const addBtn = document.getElementById("add");

const notesEl = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesEl.querySelector(".main");
const textArea = notesEl.querySelector("textarea");

editBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
});

textArea.addEventListener("input", (e) => {
  const { value } = e.target;

  main.innerHTML = marked.parse(value);
});

/* 
<div class="notes">
  <div class="tools">
    <button class="edit">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="delete">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </div>
  <div class="main hidden"></div>
  <textarea></textarea>
</div>; */
