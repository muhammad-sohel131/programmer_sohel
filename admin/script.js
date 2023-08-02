const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll(".menu_link");
if(links){
    [...links].forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            let value = e.target.attributes.data_name.value;
            if(pages){
                [...pages].forEach(page => {
                    if(page.id == value){
                        page.style.display = "block";
                    }else {
                        page.style.display = "none";
                    }
                })
            }
        })
    })
}