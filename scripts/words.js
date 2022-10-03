let btnSave = document.getElementById('save')

btnSave.addEventListener('click', (e)=>{
    let newWord = document.getElementById('newWord').value;
    if(newWord == ""){
        setTimeout(()=>{
        Swal.fire({
            icon: 'warning',
            title: 'Warning !',
            text: 'you must enter a word'
        })
        // alert('Congratulations, you win!')
       }, 500)
    }else{
        newWord = newWord.toUpperCase();
        localStorage.setItem('newWord', JSON.stringify(newWord));
        console.log(newWord);
        window.location.href = 'game.html'
    }
    

})

let btnBack = document.getElementById('back')
btnBack.addEventListener('click', (e)=>{
    window.location.href = 'index.html'
})