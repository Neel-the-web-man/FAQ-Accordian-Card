const questionInnerBox = document.querySelectorAll(".question-inner-box");
questionInnerBox.forEach((question) => {
    question.addEventListener("click", (e) => {
        const answer = e.currentTarget.nextElementSibling;
        const arrowIcon = e.currentTarget.lastElementChild;
        const questionFontWeight = e.currentTarget.firstElementChild;
        questionInnerBox.forEach((ques) => {
            const newarrowIcon = ques.lastElementChild;
            const newanswer = ques.nextElementSibling;
            const newquestionFontWeight = ques.firstElementChild;
            if (newanswer !== answer) {
                newquestionFontWeight.classList.remove("questionFontChange");
                newarrowIcon.classList.remove("arrow-icon-rotate");
                newanswer.classList.remove("show-answer");
            }
        });
        answer.classList.toggle("show-answer");
        arrowIcon.classList.toggle("arrow-icon-rotate");
        questionFontWeight.classList.toggle("questionFontChange");
    });
});