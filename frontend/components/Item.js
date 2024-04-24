import { baseUrl , getData} from "../index.js"




export default function Item(data) {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const btn2 = document.createElement('buttion')
    btn.innerHTML = "remove"
    btn2.innerHTML = "edit";
    li.innerHTML = data.title

    li.append(btn , btn2)

    btn.onclick = () => {
        const conf = {
            method: "delete",
            headers: {
                "Content-type": "application/json"
            }
        }
        fetch(baseUrl + "/todos/" + data.id , conf)
        .then(res =>  {
            if(res.status === 200 || res.status === 201) {
                getData()
            }
        })
    }
    btn2.onclick = () => {
        const newText = prompt("Enter new text:");
        if (newText !== null) {
            li.innerHTML = newText;
            const conf = {
                method: "edit",
                body: JSON.stringify({ title: newText }),
                headers: {
                    "Content-type": "application/json"
                },
                
            };
            fetch(baseUrl + "/todos" + data.id, conf)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        getData();
                    }
                });
        }
    }
    return li
} 