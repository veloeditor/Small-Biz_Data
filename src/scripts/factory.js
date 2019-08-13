const employeeHTML = (employee, department, computer) => {
  return `
    <article class="employee">
        <header class="employee__name">
        <h1>${employee.full_name}</h1>
        </header>
        <section class="employee__department">
        Works in the ${employee.department.departmentName} department
        </section>
        <section class="employee__computer">
        Currently using a ${employee.computer.name} 
        </section>
    </article>
  `
}

export default employeeHTML