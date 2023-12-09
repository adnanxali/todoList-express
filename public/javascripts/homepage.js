
document.querySelectorAll('.task').forEach(task=>{
    const checkbox=task.querySelector('.task-done');
    checkbox.addEventListener('click',()=>{
    if(checkbox.checked){
        task.querySelector('.task-link').classList.toggle('strike-thr');
    }
    else if(!checkbox.checked){
        task.querySelector('.task-link').classList.toggle('strike-thr');
        
    }
        })
    })


