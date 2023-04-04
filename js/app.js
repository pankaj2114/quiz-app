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
    },
    {
        'que': "In which decade was the Internet first implemented?",
        'a':"1940s",
        'b':'1950s',
        'c':'1960s',
        'd':'1980s',
        'correct':'c'
    },
    {
        'que': "Where are the contents of your computer's hard drive indexed?",
        'a':"Yahoo!",
        'b':'Google',
        'c':'MNS',
        'd':'None of the above',
        'correct':'d'
    },
    {
        'que': "Main circuit board in a computer is:",
        'a':"Decoder",
        'b':'Highlight',
        'c':'Select',       
        'd':'Mother board',
        'correct':'d'
    },
    {
        'que': "ISP stands for:",
        'a':"Internet Survey Period",
        'b':'Integrated Service Provider',
        'c':'Internet Security Protocol',
        'd':'Internet Service Provider',
        'correct':'d'
    },
    {
        'que': "Internet Explorer is a:",
        'a':"Any person browsing the net",
        'b':'Web Browser',
        'c':'Graphing Package',
        'd':'News Reader',
        'correct':'b'
    },
    {
        'que': "The http you type at the beginning of any site's address stands for:",
        'a':"HTML Transfer Technology Process",
        'b':'Hyperspace Terms and Tech Protocol',
        'c':'Hyperspace Techniques & Tech Progress',
        'd':'Hyper Text Transfer Protocol',
        'correct':'d'
    },
    {
        'que': "Which company created the most used networking software in the 1980's",
        'a':"Microsoft",
        'b':'Sun',
        'c':'IBM',
        'd':'IBM',
        'correct':'b'
    },
    {
        'que': "Which of the following operating systems is produced by IBM?",
        'a':"OS-2",
        'b':'Windows',
        'c':'DOS',
        'd':'UNIX',
        'correct':'a'
    },
    {
        'que': "'.TMP' extension refers usually to what kind of file?",
        'a':"Compressed Archive file",
        'b':'Image file',
        'c':'Temporary file',
        'd':'Audio file',
        'correct':'c'
    },
    {
        'que': "'.JPG' extension refers usually to what kind of file?",
        'a':"System file",
        'b':'Animation/movie file',
        'c':'MS Encarta document',
        'd':'Image file',
        'correct':'d'
    },
    {
        'que': "'.TXT' extension refers usually to what kind of file?",
        'a':"Text File",
        'b':'Image file',
        'c':'Audio file',
        'd':'Adobe Acrobat file',
        'correct':'a'
    },
    {
        'que': " In what year was the '@' chosen for its use in e-mail addresses?",
        'a':"1976",
        'b':'1972',
        'c':'1972',
        'd':'1984',
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
    if(index<total-1) index++;
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