const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const feedbackEl = document.querySelector("#feedback");
const buttons = document.querySelectorAll(".btn");

showTheseVehicles(vehicles);
setFeedback("Viser alle fartøjer.", vehicles.length);
setActiveButton("all");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    let filtered = vehicles;
    let label = "Viser alle fartøjer.";

    if (filter === "electric") {
      filtered = vehicles.filter((v) => v.isElectric === true);
      label = "Viser alle el-drevne fartøjer.";
    }

    if (filter === "moreThan2") {
      filtered = vehicles.filter((v) => (v.passengers ?? 0) > 2);
      label = "Viser fartøjer med mere end 2 sæder.";
    }

    if (filter === "electricJonas") {
      filtered = vehicles.filter((v) => v.isElectric === true && v.ownedBy === "Jonas");
      label = "Viser el-drevne fartøjer ejet af Jonas.";
    }

    if (filter === "rugbrodMoreThan1") {
      filtered = vehicles.filter((v) => v.fuel === "Rugbrød" && (v.passengers ?? 0) > 1);
      label = "Viser rugbrøds-drevne fartøjer med plads til mere end 1.";
    }

    if (filter === "all") {
      filtered = vehicles;
      label = "Viser alle fartøjer.";
    }

    showTheseVehicles(filtered);
    setFeedback(label, filtered.length);
    setActiveButton(filter);
  });
});



function showTheseVehicles(arr) {

  tbodyPointer.innerHTML = "";

 
  if (arr.length === 0) {
    tbodyPointer.innerHTML = `<tr><td colspan="6" class="empty">Ingen fartøjer matcher filteret.</td></tr>`;
    return;
  }

  arr.forEach((each) => {
   
    const type = safeText(each.type, "Ukendt");
    const fuel = safeText(each.fuel, "—");
    const passengers = Number.isFinite(each.passengers) ? each.passengers : "—";
    const ownedBy = safeText(each.ownedBy, "—");

    
    let stopsHtml = `<span class="muted">—</span>`;
    if (Array.isArray(each.stops) && each.stops.length > 0) {
      stopsHtml = each.stops.map((s) => `<span class="chip">${s}</span>`).join(" ");
    }

    
    const features = [];
    if (each.isElectric === true) features.push(`<span class="badge electric">El</span>`);
    if (each.isTandem === true) features.push(`<span class="badge tandem">Tandem</span>`);
    const featuresHtml = features.length ? features.join(" ") : `<span class="muted">—</span>`;

    tbodyPointer.innerHTML += `
      <tr>
        <td>${type}</td>
        <td>${fuel}</td>
        <td class="num">${passengers}</td>
        <td>${stopsHtml}</td>
        <td>${ownedBy}</td>
        <td>${featuresHtml}</td>
      </tr>
    `;
  });
}

function safeText(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  return value;
}

function setFeedback(text, count) {
  feedbackEl.innerHTML = `<strong>${text}</strong> <span class="muted">(${count} fundet)</span>`;
}

function setActiveButton(filterName) {
  buttons.forEach((b) => b.classList.toggle("active", b.dataset.filter === filterName));
}
