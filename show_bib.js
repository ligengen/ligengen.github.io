function showBib(btn, bib){
    const box = document.getElementById(bib);
    box.hidden = !box.hidden;
    const label = btn.lastChild;
    label.textContent = box.hidden ? " BibTex" : " Hide BibTex";
}
