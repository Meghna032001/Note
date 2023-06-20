document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addButton");
    var noteInput = document.getElementById("noteInput");
    var entriesDiv = document.getElementById("entries");

    addButton.addEventListener("click", function() {
        var noteText = noteInput.value;
        if (noteText.trim() !== "") {
            var entryDiv = document.createElement("div");
            entryDiv.className = "entry";
            entryDiv.innerText = noteText;
            entriesDiv.appendChild(entryDiv);
            noteInput.value = "";
        }
    });
});
