import API from "./data.js";
import renderToDom from "./dom.js";
import employeeHTML from "./factory.js";


API.getAPIData()
    .then(employees => {
        employees.forEach(employee => {
            const HTMLRep = employeeHTML(employee)
            renderToDom(HTMLRep)
        })
    })