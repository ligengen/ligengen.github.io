function showBib(btn, bib){
    const box = document.getElementById(bib);
    box.hidden = !box.hidden;
    // 只改最后那个文字节点，保留 <i> 图标
    const label = btn.lastChild;
    label.textContent = box.hidden ? " Show BibTex" : " Hide BibTex";
}
