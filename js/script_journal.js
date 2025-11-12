var menuLink = document.querySelector("#menuHam h4") // for cursor effect on links //
var menuHam = document.querySelector("#nav i")
var menuClose = document.querySelector("#menuHam i")


// <!--- Back to top button start ---------->
    //Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
//   <!--- Back to top button end ----------> //




// <!------ table sorting start -------> //

    function sortTable(columnIndex) {
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("journalTable");
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[columnIndex];
                y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
// <!------ table sorting end -------> //


// <!--- filter data based on domain start ----> //

    function sortTable(columnIndex) {
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("journalTable");
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[columnIndex];
                y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    function filterTable() {
        let checkboxes = document.querySelectorAll("input[name='domainFilter']:checked");
        let selectedDomains = Array.from(checkboxes).map(cb => cb.value.toLowerCase());
        let table = document.getElementById("journalTable");
        let tr = table.getElementsByTagName("tr");

        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                let domainsText = td.textContent.toLowerCase();
                let showRow = selectedDomains.length === 0 || selectedDomains.some(domain => domainsText.includes(domain));
                tr[i].style.display = showRow ? "" : "none";
                refreshRowNumbers(); // ← for updating row numbers after filtering
            }
        }
    }
// <!---  filter data based on domain end ---> //


// <!--- 🔍 Search Function with No Records Message start -----> //
   function myFunction() {
       let input = document.getElementById("searchInput").value.toUpperCase();
       let table = document.getElementById("journalTable");
       let tr = table.getElementsByTagName("tr");
       let noRecords = document.getElementById("noRecords");
       let found = false;

       for (let i = 1; i < tr.length; i++) {
           let td = tr[i].getElementsByTagName("td")[1];
           if (td) {
               let txtValue = td.textContent || td.innerText;
               if (txtValue.toUpperCase().indexOf(input) > -1) {
                   tr[i].style.display = "";
                   found = true;
               } else {
                   tr[i].style.display = "none";
               }
           }
       }
       noRecords.style.display = found ? "none" : "block";
       refreshRowNumbers(); // ← for updating row numbers after search
   }
// <!--- 🔍 Search Function with No Records Message end -----> //


// <!------- table sorting script start --------------------> //
function sortTable(n) {
  const table = document.getElementById("journalTable");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);
  const currentDir = table.getAttribute("data-sort-dir");
  const asc = currentDir !== "asc"; // toggle direction

  rows.sort((a, b) => {
    const cellA = a.cells[n].textContent.trim();
    const cellB = b.cells[n].textContent.trim();

    // 1️⃣ Special handling for "Best Quartile" (Q1 > Q2 > Q3 > Q4 > NA)
    if (n === 3) {
      const quartileRank = val => {
        if (/^Q[1-4]$/i.test(val)) return parseInt(val.substring(1));
        return 99; // NA or invalid => lowest rank
      };
      const rankA = quartileRank(cellA);
      const rankB = quartileRank(cellB);
      return asc ? rankA - rankB : rankB - rankA;
    }

    // 2️⃣ If both values are numeric, sort numerically
    const aNum = parseFloat(cellA);
    const bNum = parseFloat(cellB);
    const aIsNum = !isNaN(aNum);
    const bIsNum = !isNaN(bNum);

    if (aIsNum && bIsNum) {
      return asc ? aNum - bNum : bNum - aNum;
    }

    // 3️⃣ Put valid numbers above "NA"
    if (aIsNum && !bIsNum) return -1;
    if (!aIsNum && bIsNum) return 1;

    // 4️⃣ Fallback to alphabetical
    return asc
      ? cellA.localeCompare(cellB)
      : cellB.localeCompare(cellA);
  });

  // Re-append sorted rows
  rows.forEach(row => tbody.appendChild(row));

  // Update sort direction
  table.setAttribute("data-sort-dir", asc ? "asc" : "desc");

  // // Recalculate row numbers (if using them as index)
  // if (typeof refreshRowNumbers === "function") refreshRowNumbers();
}
// <!---- table sorting script end --------------------> //





// <!---- for nav menuHam timeline animation start --------------------> // 
var menuHam = document.querySelector("#nav i")
var menuClose = document.querySelector("#menuHam i")

var tl = gsap.timeline()

tl.to ("#menuHam",{
    right: 0,
    duration: 0.5,
    ease: "circ.out",
})

tl.from ("#menuHam h4",{
    x: 100,
    duration: .7,
    stagger: 0.2,
    ease: "power2.out",
    opacity: 0,
})

tl.from ("#menuHam i",{
    opacity: 0,
    duration:0.5,
    ease: "power2.out",
})

tl.pause()

menuHam.addEventListener("click",function(){
    tl.play()
})

menuClose.addEventListener("click",function(){
    tl.reverse()
})
// <!---- for nav menuHam timeline animation end --------------------> // 





// <!---- for row numbers in table start --------------------> // 
function refreshRowNumbers() {
  const tbody = document.getElementById("journalTable").getElementsByTagName('tbody')[0];
  const rows = tbody.getElementsByTagName("tr");

  let count = 1;
  for (let row of rows) {
    if (row.style.display === "none") continue;

    // If first cell is already a number, update it
    if (row.firstElementChild && !isNaN(row.firstElementChild.textContent)) {
      row.firstElementChild.textContent = count++;
    } else {
      const cell = document.createElement("td");
      cell.textContent = count++;
      row.insertBefore(cell, row.firstChild);
    }
  }
}

// Run once on page load
window.addEventListener("DOMContentLoaded", () => {
  refreshRowNumbers();
});
// <!---- for row numbers in table end --------------------> // 



// <!---- for label button active state start --------------------> //
document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll("#labelButton");

  labels.forEach(label => {
    const checkbox = label.querySelector("input[type='checkbox']");

    if (!checkbox) return;

    // Set initial state
    if (checkbox.checked) {
      label.classList.add("active");
    }

    // Toggle class on change
    checkbox.addEventListener("change", function () {
      label.classList.toggle("active", this.checked);
    });
  });
});
// <!---- for label button active state end --------------------> //