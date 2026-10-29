// -------------------------------------
// MATH 110 STUDY HUB
// Interactive AI Prototype
// -------------------------------------


// PAGE ELEMENTS

const questionInput = document.getElementById("question");
const askButton = document.getElementById("ask-button");

const aiResponse = document.getElementById("ai-response");
const responseText = document.getElementById("response-text");

const exampleButton = document.getElementById("example-button");
const anotherWayButton = document.getElementById("another-way-button");
const quizButton = document.getElementById("quiz-button");

const showDiscussion = document.getElementById("show-discussion");
const classDiscussion = document.getElementById("class-discussion");


// -------------------------------------
// MAIN AI RESPONSE
// -------------------------------------

function answerQuestion() {

    const question = questionInput.value.trim();

    if (question === "") {
        questionInput.focus();
        return;
    }

    aiResponse.classList.remove("hidden");

    responseText.innerHTML = `
        <p>
            <strong>Good question.</strong>
            Standard deviation tells us how spread out
            the values in a dataset are around the mean.
        </p>

        <p>
            A <strong>small standard deviation</strong>
            means most values are fairly close to the average.
            A <strong>large standard deviation</strong>
            means the values are more spread out.
        </p>

        <p>
            So instead of only knowing the average,
            standard deviation helps you understand
            how consistent or varied the data are.
        </p>
    `;

    aiResponse.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


// ASK BUTTON

askButton.addEventListener("click", answerQuestion);


// ALLOW ENTER KEY

questionInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        answerQuestion();
    }

});


// -------------------------------------
// SUGGESTED QUESTIONS
// -------------------------------------

document.querySelectorAll(".suggestion").forEach(function(button) {

    button.addEventListener("click", function() {

        questionInput.value = button.textContent.trim();

        answerQuestion();

    });

});


// -------------------------------------
// FOLLOW-UP: EXAMPLE
// -------------------------------------

exampleButton.addEventListener("click", function() {

    responseText.innerHTML = `
        <p>
            <strong>Here's an example.</strong>
        </p>

        <p>
            Imagine two classes both have an average
            exam score of <strong>80</strong>.
        </p>

        <p>
            <strong>Class A:</strong><br>
            78, 79, 80, 81, 82
        </p>

        <p>
            <strong>Class B:</strong><br>
            60, 70, 80, 90, 100
        </p>

        <p>
            Both classes have the same mean, but Class B's
            scores are much more spread out. That means
            Class B has the larger standard deviation.
        </p>
    `;

});


// -------------------------------------
// FOLLOW-UP: EXPLAIN ANOTHER WAY
// -------------------------------------

anotherWayButton.addEventListener("click", function() {

    responseText.innerHTML = `
        <p>
            Think of standard deviation as a
            <strong>"spread meter."</strong>
        </p>

        <p>
            Imagine everyone standing around the class
            average.
        </p>

        <p>
            If everyone is standing close together,
            the standard deviation is small.
        </p>

        <p>
            If everyone is scattered far apart,
            the standard deviation is large.
        </p>
    `;

});


// -------------------------------------
// FOLLOW-UP: QUIZ
// -------------------------------------

quizButton.addEventListener("click", function() {

    responseText.innerHTML = `
        <p>
            <strong>Quick check:</strong>
        </p>

        <p>
            Two datasets have the same mean.
            Dataset A has values clustered closely around
            the mean, while Dataset B has values spread
            far apart.
        </p>

        <p>
            <strong>
                Which dataset has the larger standard deviation?
            </strong>
        </p>

        <p>
            Think about it before revealing the answer.
        </p>

        <button onclick="revealQuizAnswer()" class="quiz-answer-button">
            Reveal answer
        </button>
    `;

});


// QUIZ ANSWER

function revealQuizAnswer() {

    responseText.innerHTML += `
        <p class="quiz-feedback">
            ✓ <strong>Dataset B.</strong>
            Its values are farther from the mean,
            so it has the larger standard deviation.
        </p>
    `;

}


// -------------------------------------
// CLASSMATE DISCUSSION
// -------------------------------------

showDiscussion.addEventListener("click", function() {

    classDiscussion.classList.toggle("hidden");

    if (classDiscussion.classList.contains("hidden")) {

        showDiscussion.textContent =
            "See what 4 classmates said →";

    } else {

        showDiscussion.textContent =
            "Hide classmate responses ↑";

    }

});
