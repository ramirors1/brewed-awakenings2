import { getEmployees, getOrders } from "./database.js"

const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {

                let employeeOrders = orders.filter(           //creates a variable with the value of the orders array after it has been filtered for specific data
                    order => {                               //creates the order function
                    if (order.employeeId === employee.id) {  //checks if employee id of an order matches an employee's id 
                        return true                          //returns true if id's match
                    }
                    }
                    );    
                // if (employeeOrders.employeeId === employee.id) {
                //     // if (employee.id === parseInt(employeeId)) {

                //     sales += 1           
                //     }   
                
                if (employee.id === parseInt(employeeId)) {
                // window.alert(` ${employee.name} sold ${sales} products `)  
                window.alert(` ${clickEvent.target.innerText} sold ${employeeOrders.length} products `)
                        }
                    

                    
                }
            }
        }
    
    )

const employees = getEmployees()


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`   
    }

    html += "</ul>"

    return html
}

