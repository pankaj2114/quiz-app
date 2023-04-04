const question = [
    {
        'que': "Which of the following is a markup language?",
        'a':"HTML",
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': "What year was JavaScript launched?",
        'a':"1996",
        'b':'1991',
        'c':'1995',
        'd':'none of the above',
        'correct':'c'
    },
    {
        'que': "What does CSS stand for?",
        'a':"Hypertext Markup Language",
        'b':'Cascading Style Sheet',
        'c':'Json Object Notation',
        'd':'none of the above',
        'correct':'b'
    }
]
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById('queBox');
const options = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = question[index]
    queBox.innerText=`${index+1}) ${data.que}`
    options[0].nextElementSibling.innerText = data.a
    options[1].nextElementSibling.innerText = data.b
    options[2].nextElementSibling.innerText = data.c
    options[3].nextElementSibling.innerText = data.d    
}

const submitQuiz = () =>{
    const data = question[index]
    const ans = getAns()
    if(ans === data.correct) right++
    else wrong++
    index++
    loadQuestion()
    return
}

const next = () =>{
    if(index<total) index++;
    loadQuestion()
    return
}
const previous = () =>{
    if(index>0) index--;
    loadQuestion()
    return
}

const getAns = () =>{
    let answer;
    options.forEach(
        (input)=>{
            if(input.checked) answer = input.value
        }
    )
    return answer;
}
const reset = () =>{
    options.forEach(
        (input)=>input.checked=false        
    )
}
const endQuiz = () =>{
   document.getElementById('box').innerHTML= `<h2 style="text-align:center" >
      Thank you for playing the quiz.<br>
      ${right}/${total} is Correct.
    </h2>`
}
loadQuestion();