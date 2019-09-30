// On Submit, get values and store them

document.getElementById("submit").addEventListener("click", textSave)
let pressed = 0;

function textSave() {
    let agency = document.getElementById("agency");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let zip = document.getElementById("zip");
    let phone = document.getElementById("phone");
    let fax = document.getElementById("fax");
    let alias = document.getElementById("alias");
    let path1 = document.getElementById("path1");
    let path2 = document.getElementById("path2");
    let aid = document.getElementById("aid");
    // Actual creation of statement. Placeholders need to be updated.
    pressed = 1;
    textCombine();
};

function textCombine() {
    // Sample
    // let statement1 = "fullPath1" + path1.value + "fullPath2" + path2.value + "alias" + alias.value;
    let statement1 = "Insert into EVVAGENCY   (EVV_DB_PATH, EVV_AGENCY_PATH, EVV_LINK_NAME, EVV_DB_NAME, EVV_ADDRESS, EVV_STATE, EVV_CITY, EVV_ZIP, EVV_PHONE, EVV_SEQ_CLIENT, EVV_SEQ_EMPLOYEE, EVV, EVV_STEP)Values ('" + path1.value + "', '" + path2.value + "', '" + alias.value + "', '" + agency.value + "', '" + address.value + "', '" + state.value + "', '" + city.value + "', '" + zip.value + "', " + phone.value + ", 10001, 20001, 'N', 0);";
    // Check statement
    console.log(statement1);
    // Generate statement value onto the page
    let results = document.getElementById("results");
    if (pressed === 1) {
       let para = document.createElement("p");
       para.innerHTML = 
    }
};

// Clears values on page load
// This can be chagned later to clear in bulk, probably based on parent div
/*
window.onload = function () {
    document.getElementById("name").value="";
    document.getElementById("address").value="";
    document.getElementById("city").value="";
    document.getElementById("state").value="";
    document.getElementById("zip").value="";
    document.getElementById("phone").value="";
    document.getElementById("fax").value="";
    document.getElementById("alias").value="";
    document.getElementById("path1").value="";
    document.getElementById("path2").value="";
    document.getElementById("aid").value="";
}

/*
Full text for first query
Insert into EVVAGENCY   (EVV_DB_PATH, EVV_AGENCY_PATH, EVV_LINK_NAME, EVV_DB_NAME, EVV_ADDRESS, EVV_STATE, EVV_CITY, EVV_ZIP, EVV_PHONE, EVV_SEQ_CLIENT, EVV_SEQ_EMPLOYEE, EVV, EVV_STEP)Values ('\\db39\test$\VestaCS\data\test\data.add', '\\db39\test$\VestaCS\data\agencyinfo\agencyinfo.add', 'testDB', 'TEST NAME',     'ADDRES', 'TX', 'CITY', 'ZIP',9561231234, 10001, 20001, 'N', 0);
*/