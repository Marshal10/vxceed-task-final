'use strict'

const tableParent = document.querySelector('.emp-details')
let tableHtml = `
                <table>
                <tr>
                    <td>Name</td>
                    <td>Designation</td>
                    <td>Age</td>
                    <td>Experience</td>
                    <td>Address</td>
                    <td>Contact</td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>Software Engineer</td>
                    <td>30</td>
                    <td>5 years</td>
                    <td>Anytown, USA</td>
                    <td>(555) 123-4567</td>
                </tr>
                <tr>
                    <td>Sarah Johnson</td>
                    <td>Marketing Manager</td>
                    <td>35</td>
                    <td>8 years</td>
                    <td>Cityville, USA</td>
                    <td>(555) 987-6543</td>
                </tr>
                <tr>
                    <td>David Lee</td>
                    <td>HR Specialist</td>
                    <td>28</td>
                    <td>3 years</td>
                    <td>USA</td>
                    <td>(555) 234-5678</td>
                </tr>
                <tr>
                    <td>Emily Davis</td>
                    <td>Accountant</td>
                    <td>32</td>
                    <td>6 years</td>
                    <td>Townsville, USA</td>
                    <td>(555) 876-5432</td>
                </tr>
            </table>`

let desktopHtml = `
<div class="row">
                <div class="info">
                    <div class="label">Name</div>
                    <div class="data">John Smith</div>
                </div>

                <div class="info">
                    <div class="label">Designation</div>
                    <div class="data">Software Engineer</div>
                </div>

                <div class="info">
                    <div class="label">Age</div>
                    <div class="data">30</div>
                </div>

                <div class="info">
                    <div class="label">Experience</div>
                    <div class="data">5 years</div>
                </div>

                <div class="info">
                    <div class="label">Address</div>
                    <div class="data">Anytown, USA</div>
                </div>

                <div class="info">
                    <div class="label">Contact</div>
                    <div class="data">(555) 123-4567</div>
                </div>
            </div>

            <div class="row">
                <div class="info">
                    <div class="label">Name</div>
                    <div class="data">Sarah Johnson</div>
                </div>

                <div class="info">
                    <div class="label">Designation</div>
                    <div class="data">Marketing Manager</div>
                </div>

                <div class="info">
                    <div class="label">Age</div>
                    <div class="data">35</div>
                </div>

                <div class="info">
                    <div class="label">Experience</div>
                    <div class="data">8 years</div>
                </div>

                <div class="info">
                    <div class="label">Address</div>
                    <div class="data">Cityville, USA</div>
                </div>

                <div class="info">
                    <div class="label">Contact</div>
                    <div class="data">(555) 987-654</div>
                </div>
            </div>
            <div class="row">
                <div class="info">
                    <div class="label">Name</div>
                    <div class="data">David Lee</div>
                </div>

                <div class="info">
                    <div class="label">Designation</div>
                    <div class="data">HR Specialist</div>
                </div>

                <div class="info">
                    <div class="label">Age</div>
                    <div class="data">28</div>
                </div>

                <div class="info">
                    <div class="label">Experience</div>
                    <div class="data">3 years</div>
                </div>

                <div class="info">
                    <div class="label">Address</div>
                    <div class="data">Cityville, USA</div>
                </div>

                <div class="info">
                    <div class="label">Contact</div>
                    <div class="data">(555) 234-5678</div>
                </div>
            </div>

            <div class="row">
                <div class="info">
                    <div class="label">Name</div>
                    <div class="data">Emily Davis</div>
                </div>

                <div class="info">
                    <div class="label">Designation</div>
                    <div class="data">Accountant</div>
                </div>

                <div class="info">
                    <div class="label">Age</div>
                    <div class="data">32</div>
                </div>

                <div class="info">
                    <div class="label">Experience</div>
                    <div class="data">6 years</div>
                </div>

                <div class="info">
                    <div class="label">Address</div>
                    <div class="data">Townsville, USA</div>
                </div>

                <div class="info">
                    <div class="label">Contact</div>
                    <div class="data">(555) 876-5432</div>
                </div>



            </div>

            
`

let x = window.matchMedia("(min-width: 601px)")
let myFunction = (x) => {

    if (x.matches) {
        tableParent.innerHTML=tableHtml

    } else {
        tableParent.innerHTML=desktopHtml
    }
}

x.addListener(myFunction)

myFunction(x)