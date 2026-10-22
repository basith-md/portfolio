// Retro theme: only job is the open/close-all toggle. Page works without it.
(function () {
    var btn = document.getElementById('toggle-all');
    if (!btn) return;
    var items = document.querySelectorAll('.ledger details');
    var open = false;

    btn.hidden = false;
    btn.addEventListener('click', function () {
        open = !open;
        items.forEach(function (d) { d.open = open; });
        btn.textContent = open ? '[ close all ]' : '[ open all ]';
    });
})();
