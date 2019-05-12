
var btn, i, input, phrase, table, txt, tr;

input = document.getElementsByClassName('input')[0];
table = document.getElementsByClassName('table')[0];
tr = table.getElementsByTagName('tr');
btn = document.getElementsByClassName('button')[0];

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});

btn.onclick = function() {
  phrase = input.value.toLowerCase();
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
      if (td) {
       txt = td.innerText;
        if (txt.toLowerCase().indexOf(phrase) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}
