const API = {
    getAPIData() {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
            .then(data => data.json())
    }
}

export default API