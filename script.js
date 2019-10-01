// On Submit, get values and store them

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("submit").addEventListener("click", textSave);
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
    pressed = 1;
    textCombine();
};

function textCombine() {
    let statement1 = "Insert into EVVAGENCY   (EVV_DB_PATH, EVV_AGENCY_PATH, EVV_LINK_NAME, EVV_DB_NAME, EVV_ADDRESS, EVV_STATE, EVV_CITY, EVV_ZIP, EVV_PHONE, EVV_SEQ_CLIENT, EVV_SEQ_EMPLOYEE, EVV, EVV_STEP)Values ('" + path1.value + "', '" + path2.value + "\\VestaCS\\data\\agencyinfo\\agencyinfo.add', '" + alias.value + "', '" + agency.value + "', '" + address.value + "', '" + state.value + "', '" + city.value + "', '" + zip.value + "', " + phone.value + ", 10001, 20001, 'N', 0);";
    // Check statement
    console.log(statement1);
    // Generate statement value onto the page
    let results = document.getElementById("results");
    if (pressed === 1) {
       results.textContent = statement1;
    };
    textCombine2();
};

function textCombine2() {
    let statement2 = "";
    // Generate statement value on the page
    let results2 = document.getElementById("results2");
    if (pressed === 1) {
        results2.textContent = statement2;
    };
    // Disable submit
    if (pressed === 1) {
        submit.disabled = true;
    };
};

// Clears values on page load
// This can be chagned later to clear in bulk, probably based on parent div

function clear() {
    document.getElementById("agency").value="";
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
    pressed = 0;
    submit.disabled = false;
    results.textContent = "";
    results2.textContent = "";
};

window.onload = function() {
    this.clear();
};

/*
Full text for first query
Insert into EVVAGENCY   (EVV_DB_PATH, EVV_AGENCY_PATH, EVV_LINK_NAME, EVV_DB_NAME, EVV_ADDRESS, EVV_STATE, EVV_CITY, EVV_ZIP, EVV_PHONE, EVV_SEQ_CLIENT, EVV_SEQ_EMPLOYEE, EVV, EVV_STEP)Values ('\\db39\test$\VestaCS\data\test\data.add', '\\db39\test$\VestaCS\data\agencyinfo\agencyinfo.add', 'testDB', 'TEST NAME',     'ADDRES', 'TX', 'CITY', 'ZIP',9561231234, 10001, 20001, 'N', 0);

Full text for second query
insert into provider.AGENCY   (COUNTY, REGION, LIC_NUM, FAC_NAME, ADDRESS, CIT_ST_ZIP, PHONE, FAX, TYPE, SERVICES, ADMIN, AGENCY_NAME, AGENCY_ADDR, AGENCY_CSZ, LIC_1ST, VESTA_CLIENT, REGION_TX, EVV_AGENCY_ID, NPI, CONTRACT_ID) Values   ('HARRIS', '6', NULL, 'TEST', 'Address', 'City, TX 78550', 1231231234 , 1231231234 , 'Parent Agency', 'Home Health Services', NULL,                          'TEST', 'Address', 'City, TX 78550', NULL, 'Y', 6, 2883, null, NULL);

*/