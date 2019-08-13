const employeeContainer = document.querySelector("#employees-container")

const renderToDom = (HTMLString) => {
    employeeContainer.innerHTML += HTMLString
}

export default renderToDom