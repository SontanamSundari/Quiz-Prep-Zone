const categorybtns = document.querySelectorAll(".options button")
const quesbtns = document.querySelectorAll(".quesopt button")
const startbtn = document.querySelector(".start button")
const quizcontainer = document.querySelector(".quiz-container")
const container = document.querySelector(".container")
const resultcontainer = document.querySelector(".result-container")
const tryagainbtn = document.querySelector(".try-btn")
const questext = document.querySelector(".question-text")
const ansopts = document.querySelector(".ans-opts")
const nextbtn = document.querySelector(".next-btn")
const resultmess = document.querySelector(".result-mess")

let selectedcategory=null
let queslimit = 0
let currentquesindex = 0
let score = 0
let currentques = [];

categorybtns.forEach(button =>{
    button.addEventListener("click",() =>{
        categorybtns.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active")
        selectedcategory = button.getAttribute("data-category").toLowerCase()
    })
})

quesbtns.forEach(button =>{
    button.addEventListener("click",()=>{
        quesbtns.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active")
        queslimit = parseInt(button.innerText)
    })
})

startbtn.addEventListener("click",()=>{
    if(!selectedcategory || queslimit === 0){
        alert("Please select both a category and number of questions")
        return;
    }
    
    const categorydata = questions.find(cat => cat.category.toLowerCase() === selectedcategory);
    if(!categorydata) return;
    currentques = categorydata.questions.sort(()=> 0.5-Math.random()).slice(0,queslimit)
    currentquesindex =0;
    score =0;
    container.style.display="none";
    quizcontainer.style.display = 'block';
    showques();
})
function showques(){
    const q = currentques[currentquesindex]
    questext.innerText = q.question
    ansopts.innerHTML=""
    q.options.forEach((option,index)=>{
        const li = document.createElement("li")
        li.classList.add("ans-opt")
        li.innerHTML = `<p>${option}</p>`
        li.addEventListener("click",()=> selectans(li,index,q.correctAnswer))
        ansopts.appendChild(li)
    })
}
function selectans(selectedli,selectedindex,correctindex){
    const allopts = document.querySelectorAll(".ans-opt")
    allopts.forEach(opt => opt.style.pointerEvents="none")
    if(selectedindex === correctindex){
        selectedli.classList.add("correct");
        score++;
    }
    else{
        selectedli.classList.add("incorrect");
        allopts[correctindex].classList.add("correct")
    }
}
nextbtn.addEventListener("click",()=>{
    currentquesindex++;
    if(currentquesindex < currentques.length){
        showques();
    }
    else{
        quizcontainer.style.display = "none"
        resultcontainer.style.display = "block";
        resultmess.innerHTML = `You Got <b>${score}</b> out of <b>${queslimit}</b> Correct.`
    }
})

tryagainbtn.addEventListener("click",()=>{
    selectedcategory=null;
    queslimit=0
    currentquesindex=0
    score=0
    currentques=[]
    categorybtns.forEach(btn => btn.classList.remove("active"))
    quesbtns.forEach(btn => btn.classList.remove("active"))
    resultcontainer.style.display="none"
    container.style.display="flex"
})

