let data=[{roll_no:'1',name:'manu',email:'manu@gmail.com',age:25,course:'bio'},{roll_no:'2',name:'ram',email:'ram@gmail.com',age:20,course:'commerce'},{roll_no:'3',name:'lalu',email:'lalu@gmail.com',age:23,course:'cs'}]

document.getElementById("search").addEventListener("input",function(){
    console.log(this.value.toLowerCase());
    
    const qry = this.value.toLowerCase()
    const result = data.filter((std)=>std.name.toLowerCase().includes(qry) || std.course.toLowerCase().includes(qry))
    console.log(result);
    mngmt(result)
    
})

function mngmt(d=data){
    let table=document.querySelector("tbody")
    table.innerHTML=''
    d.forEach((i) => {
        let tr=document.createElement("tr")
        let roll_no_td=document.createElement("td")
        roll_no_td.innerHTML=i.roll_no
        tr.appendChild(roll_no_td)

        let name_td=document.createElement("td")
        name_td.innerHTML=i.name
        tr.appendChild(name_td)

        let email_td=document.createElement("td")
        email_td.innerHTML=i.email
        tr.appendChild(email_td)

        let age_td=document.createElement("td")
        age_td.innerHTML=i.age
        tr.appendChild(age_td)

        let course_td=document.createElement("td")
        course_td.innerHTML=i.course
        tr.appendChild(course_td)

        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.textContent="edit"
        edit_btn.onclick=function(){
            edit_form(i.roll_no)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement("td")
        let delete_btn=document.createElement("button")
        delete_btn.textContent="delete"
        delete_btn.onclick=function(){
            delete_form(i.roll_no)
        }
        delete_td.appendChild(delete_btn)
        tr.appendChild(delete_td)

        table.appendChild(tr)
    })
}


document.getElementById("add_form").addEventListener('submit',function(event){

    event.preventDefault()
    const roll_no = document.getElementById('roll_no').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const age = document.getElementById('age').value
    const course = document.getElementById('course').value
    data.push({roll_no:roll_no,name:name,email:email,age:age,course:course})
    document.getElementById('roll_no').value=''
    document.getElementById('name').value=''
    document.getElementById('email').value=''
    document.getElementById('age').value=''
    document.getElementById('course').value=''

    mngmt()

})

let edit_id=''

function edit_form(roll_no){
    console.log(roll_no);
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'

    edit_data=data.find(std => std.roll_no==roll_no)
    console.log(edit_data);
    document.getElementById('eroll_no').value=edit_data.roll_no
    document.getElementById('ename').value=edit_data.name
    document.getElementById('eemail').value=edit_data.email
    document.getElementById('eage').value=edit_data.age
    document.getElementById('e\ourse').value=edit_data.course
    edit_id=edit_data.roll_no

}

document.getElementById("edit_form").addEventListener('submit',function(event){

    event.preventDefault()
    const eroll_no = document.getElementById('eroll_no').value
    const ename = document.getElementById('ename').value
    const eemail = document.getElementById('eemail').value
    const eage = document.getElementById('eage').value
    const ecourse = document.getElementById('ecourse').value

    data=data.map(std=>{
        if(std.roll_no==edit_id){
            return{...std,roll_no:eroll_no,name:ename,email:eemail,age:eage,course:ecourse}
        }return std
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    mngmt()
})

function delete_form(roll_no){
    data=data.filter(std=>{
        if (std.roll_no!=roll_no){
            return std
        }
    })
    mngmt()
}


mngmt()