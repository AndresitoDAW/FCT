// Elementos del DOM
const monthYear = document.getElementById("month-year") as HTMLElement | null;
const daysContainer = document.getElementById("days") as HTMLElement | null;

const prevBtn = document.getElementById("prev") as HTMLButtonElement | null;
const nextBtn = document.getElementById("next") as HTMLButtonElement | null;

const modal = document.getElementById("modal") as HTMLElement | null;
const saveBtn = document.getElementById("save-event") as HTMLButtonElement | null;
const closeBtn = document.getElementById("close-modal") as HTMLButtonElement | null;

let currentDate = new Date();
let selectedDate = "";

// Renderizar calendario
function renderCalendar(date: Date) {
  if (!monthYear || !daysContainer) return;

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  monthYear.textContent = `${monthNames[month]} ${year}`;
  daysContainer.innerHTML = "";

  const start = firstDay === 0 ? 6 : firstDay - 1;

  for (let i = 0; i < start; i++) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    daysContainer.appendChild(empty);
  }

  const events = JSON.parse(localStorage.getItem("events") || "[]");

  for (let day = 1; day <= lastDay; day++) {
    const div = document.createElement("div");
    div.textContent = day.toString();

    div.addEventListener("click", () => openModal(year, month, day));

    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      div.classList.add("today");
    }

    const hasEvent = events.some((e: any) => e.date === `${year}-${month + 1}-${day}`);

    if (hasEvent) {
      const dot = document.createElement("div");
      dot.style.width = "6px";
      dot.style.height = "6px";
      dot.style.background = "#007bff";
      dot.style.borderRadius = "50%";
      dot.style.margin = "4px auto 0";
      div.appendChild(dot);
    }

    daysContainer.appendChild(div);
  }
}

// Modal
function openModal(year: number, month: number, day: number) {
  selectedDate = `${year}-${month + 1}-${day}`;
  if (modal) modal.classList.remove("hidden");
}

function closeModal() {
  if (modal) modal.classList.add("hidden");
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

// Guardar evento
function saveEvent() {
  const titleInput = document.getElementById("event-title") as HTMLInputElement | null;
  if (!titleInput) return;

  const title = titleInput.value.trim();
  if (!title) return;

  const events = JSON.parse(localStorage.getItem("events") || "[]");

  events.push({
    date: selectedDate,
    title
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
  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });
}

// Inicializar
renderCalendar(currentDate);
