// ===== CARGOVEX TRACKING SYSTEM =====

// Save shipment from Admin
function trackShipment() {
  const code = document.getElementById("trackingInput").value.trim();

  const resultBox = document.getElementById("result");
  const rCode = document.getElementById("r-code");
  const rStatus = document.getElementById("r-status");

  if (!code) {
    alert("Please enter a tracking code");
    return;
  }

  // Demo tracking data
  const data = {
    CARGO123: "In Transit",
    CARGO999: "On Hold",
    CVX123: "Delivered"
  };

  if (data[code]) {
    rCode.textContent = code;
    rStatus.textContent = data[code];
    resultBox.style.display = "block";
  } else {
    rCode.textContent = code;
    rStatus.textContent = "Tracking code not found";
    resultBox.style.display = "block";
  }
}