// Elementos del DOM
var monthYear = document.getElementById("month-year");
var daysContainer = document.getElementById("days");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var modal = document.getElementById("modal");
var saveBtn = document.getElementById("save-event");
var closeBtn = document.getElementById("close-modal");
var currentDate = new Date();
var selectedDate = "";
// Renderizar calendario
function renderCalendar(date) {
    if (!monthYear || !daysContainer)
        return;
    var year = date.getFullYear();
    var month = date.getMonth();
    var firstDay = new Date(year, month, 1).getDay();
    var lastDay = new Date(year, month + 1, 0).getDate();
    var monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    monthYear.textContent = "".concat(monthNames[month], " ").concat(year);
    daysContainer.innerHTML = "";
    var start = firstDay === 0 ? 6 : firstDay - 1;
    for (var i = 0; i < start; i++) {
        var empty = document.createElement("div");
        empty.classList.add("empty");
        daysContainer.appendChild(empty);
    }
    var events = JSON.parse(localStorage.getItem("events") || "[]");
    var _loop_1 = function (day) {
        var div = document.createElement("div");
        div.textContent = day.toString();
        div.addEventListener("click", function () { return openModal(year, month, day); });
        var today = new Date();
        if (day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()) {
            div.classList.add("today");
        }
        var hasEvent = events.some(function (e) { return e.date === "".concat(year, "-").concat(month + 1, "-").concat(day); });
        if (hasEvent) {
            var dot = document.createElement("div");
            dot.style.width = "6px";
            dot.style.height = "6px";
            dot.style.background = "#007bff";
            dot.style.borderRadius = "50%";
            dot.style.margin = "4px auto 0";
            div.appendChild(dot);
        }
        daysContainer.appendChild(div);
    };
    for (var day = 1; day <= lastDay; day++) {
        _loop_1(day);
    }
}
// Modal
function openModal(year, month, day) {
    selectedDate = "".concat(year, "-").concat(month + 1, "-").concat(day);
    if (modal)
        modal.classList.remove("hidden");
}
function closeModal() {
    if (modal)
        modal.classList.add("hidden");
}
if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}
// Guardar evento
function saveEvent() {
    var titleInput = document.getElementById("event-title");
    if (!titleInput)
        return;
    var title = titleInput.value.trim();
    if (!title)
        return;
    var events = JSON.parse(localStorage.getItem("events") || "[]");
    events.push({
        date: selectedDate,
        title: title
    });
    localStorage.setItem("events", JSON.stringify(events));
    titleInput.value = "";
    closeModal();
    renderCalendar(currentDate);
}
if (saveBtn) {
    saveBtn.addEventListener("click", saveEvent);
}
// Navegación entre meses
if (prevBtn) {
    prevBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
}
if (nextBtn) {
    nextBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
}
// Inicializar
renderCalendar(currentDate);
