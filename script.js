// -------------------------------------
// MATH 110 STUDY HUB
// Interactive AI Prototype
// -------------------------------------

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
// CURRENT TOPIC
// -------------------------------------

let currentTopic = "standardDeviation";


// -------------------------------------
// COURSE CONTENT
// -------------------------------------

const topics = {

    standardDeviation: {

        keywords: [
            "standard deviation",
            "standard deviations",
            "spread",
            "spread out"
        ],

        answer: `
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
        `,

        example: `
            <p><strong>Here's an example.</strong></p>

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
                scores are much more spread out. Class B therefore
                has the larger standard deviation.
            </p>
        `,

        anotherWay: `
            <p>
                Think of standard deviation as a
                <strong>"spread meter."</strong>
            </p>

            <p>
                Imagine the values standing around their average.
                If they're packed closely together, standard
                deviation is small.
            </p>

            <p>
                If they're scattered farther away from the average,
                standard deviation is larger.
            </p>
        `,

        quiz: `
            <p><strong>Quick check:</strong></p>

            <p>
                Two datasets have the same mean.
                Dataset A has values clustered closely around
                the mean. Dataset B has values spread far apart.
            </p>

            <p>
                <strong>
                    Which dataset has the larger standard deviation?
                </strong>
            </p>

            <button onclick="revealQuizAnswer()" class="quiz-answer-button">
                Reveal answer
            </button>
        `,

        quizAnswer: `
            ✓ <strong>Dataset B.</strong>
            Its values are farther from the mean, so it has
            the larger standard deviation.
        `,

        peerName: "Maya R.",

        peerQuestion:
            "I understand how to calculate standard deviation, but what does the number actually tell me?",

        replies: [
            {
                name: "Jordan K.",
                text: "I think of it as how far values tend to be from the average. Smaller means they're clustered closer together."
            },
            {
                name: "Alex T.",
                text: "Comparing two classes with the same average but different spreads really helped me understand it."
            },
            {
                name: "Priya S.",
                text: "I stopped thinking of it as just a calculation and started thinking of it as a description of the data."
            }
        ]
    },


    zScore: {

        keywords: [
            "z-score",
            "z score",
            "zscore",
            "z scores",
            "z-scores"
        ],

        answer: `
            <p>
                <strong>A z-score tells you where a value sits
                compared with the rest of the dataset.</strong>
            </p>

            <p>
                Specifically, it tells you how many standard
                deviations a value is above or below the mean.
            </p>

            <p>
                A z-score of <strong>0</strong> means the value
                is exactly at the mean. A z-score of
                <strong>+2</strong> means it is two standard
                deviations above the mean.
            </p>
        `,

        example: `
            <p><strong>Here's an example.</strong></p>

            <p>
                Suppose the average exam score is 80 and the
                standard deviation is 5.
            </p>

            <p>
                A student scores <strong>90</strong>.
            </p>

            <p>
                That's 10 points above the mean. Since each
                standard deviation is 5 points, the score is
                <strong>2 standard deviations above the mean</strong>.
            </p>

            <p>
                So the student's z-score is <strong>+2</strong>.
            </p>
        `,

        anotherWay: `
            <p>
                Think of a z-score like a
                <strong>location marker.</strong>
            </p>

            <p>
                The mean is position 0. Positive z-scores are
                above the mean, and negative z-scores are below it.
            </p>

            <p>
                The larger the number, the farther that value
                is from the average.
            </p>
        `,

        quiz: `
            <p><strong>Quick check:</strong></p>

            <p>
                A student has a z-score of <strong>-1.5</strong>.
            </p>

            <p>
                Is the student's score above or below the mean?
            </p>

            <button onclick="revealQuizAnswer()" class="quiz-answer-button">
                Reveal answer
            </button>
        `,

        quizAnswer: `
            ✓ <strong>Below the mean.</strong>
            The negative sign tells us the value is below the
            average, specifically 1.5 standard deviations below it.
        `,

        peerName: "Jordan K.",

        peerQuestion:
            "When am I actually supposed to use a z-score instead of just looking at the raw score?",

        replies: [
            {
                name: "Maya R.",
                text: "I think they're useful when you want to know how unusual a score is compared with everyone else."
            },
            {
                name: "Diego M.",
                text: "They also helped me compare scores from different scales because everything gets expressed in standard deviations."
            },
            {
                name: "Priya S.",
                text: "The positive and negative signs finally clicked when I pictured the mean as zero."
            }
        ]
    },


    variance: {

        keywords: [
            "variance",
            "squared differences",
            "squared deviation",
            "squared deviations"
        ],

        answer: `
            <p>
                <strong>Variance is another measure of how spread
                out a dataset is.</strong>
            </p>

            <p>
                It looks at how far each value is from the mean,
                squares those differences, and then averages them.
            </p>

            <p>
                Variance and standard deviation are closely related:
                <strong>standard deviation is the square root of
                variance.</strong>
            </p>
        `,

        example: `
            <p><strong>Here's the basic idea.</strong></p>

            <p>
                Imagine the mean is <strong>10</strong> and one
                value is <strong>12</strong>.
            </p>

            <p>
                Its difference from the mean is 2.
                For variance, we square that difference:
                <strong>2² = 4</strong>.
            </p>

            <p>
                We do this for every value and then average those
                squared differences.
            </p>
        `,

        anotherWay: `
            <p>
                Think of variance as measuring
                <strong>how much disagreement there is with
                the average.</strong>
            </p>

            <p>
                Values close to the mean contribute less.
                Values far from the mean contribute more.
            </p>

            <p>
                Squaring prevents positive and negative differences
                from simply canceling each other out.
            </p>
        `,

        quiz: `
            <p><strong>Quick check:</strong></p>

            <p>
                Dataset A has almost identical values.
                Dataset B has values scattered widely.
            </p>

            <p>
                Which dataset would you expect to have
                greater variance?
            </p>

            <button onclick="revealQuizAnswer()" class="quiz-answer-button">
                Reveal answer
            </button>
        `,

        quizAnswer: `
            ✓ <strong>Dataset B.</strong>
            Greater spread means greater variance.
        `,

        peerName: "Priya S.",

        peerQuestion:
            "Why do we square the differences when calculating variance? That step feels really random to me.",

        replies: [
            {
                name: "Jordan K.",
                text: "I think part of it is so negative and positive differences don't cancel each other out."
            },
            {
                name: "Alex T.",
                text: "That's what helped me too. If we just added the differences from the mean, we'd end up back at zero."
            },
            {
                name: "Maya R.",
                text: "I still find the formula confusing, but thinking about variance as spread makes the calculation make more sense."
            }
        ]
    },


    mean: {

        keywords: [
            "mean",
            "average",
            "averages"
        ],

        answer: `
            <p>
                <strong>The mean is one way to describe the center
                of a dataset.</strong>
            </p>

            <p>
                You calculate it by adding all the values together
                and dividing by the number of values.
            </p>

            <p>
                The mean is useful, but it can be influenced by
                unusually high or low values called
                <strong>outliers</strong>.
            </p>
        `,

        example: `
            <p><strong>Here's an example.</strong></p>

            <p>
                Suppose the values are:
                <strong>5, 7, 8, 10, 10</strong>.
            </p>

            <p>
                Their total is 40. There are 5 values.
            </p>

            <p>
                40 ÷ 5 = <strong>8</strong>.
            </p>

            <p>
                So the mean is <strong>8</strong>.
            </p>
        `,

        anotherWay: `
            <p>
                Imagine combining everything into one big pile
                and then redistributing it equally.
            </p>

            <p>
                The amount each person would receive is the
                <strong>mean</strong>.
            </p>
        `,

        quiz: `
            <p><strong>Quick check:</strong></p>

            <p>
                What is the mean of:
                <strong>4, 6, 8</strong>?
            </p>

            <button onclick="revealQuizAnswer()" class="quiz-answer-button">
                Reveal answer
            </button>
        `,

        quizAnswer: `
            ✓ <strong>6.</strong>
            4 + 6 + 8 = 18, and 18 ÷ 3 = 6.
        `,

        peerName: "Alex T.",

        peerQuestion:
            "Why does one really high number change the mean so much? Should we always use the mean?",

        replies: [
            {
                name: "Maya R.",
                text: "That's where the median started making more sense to me because one extreme number doesn't move it as much."
            },
            {
                name: "Jordan K.",
                text: "I don't think the mean is bad, but outliers can make it less representative of a typical value."
            },
            {
                name: "Priya S.",
                text: "The income example from class helped me understand this. One billionaire could really change the average."
            }
        ]
    }

};


// -------------------------------------
// IDENTIFY THE STUDENT'S TOPIC
// -------------------------------------

function detectTopic(question) {

    const lowerQuestion = question.toLowerCase();

    for (const topicName in topics) {

        const topic = topics[topicName];

        for (const keyword of topic.keywords) {

            if (lowerQuestion.includes(keyword)) {
                return topicName;
            }

        }

    }

    return null;
}


// -------------------------------------
// UPDATE PEER CONVERSATION
// -------------------------------------

function updatePeerConversation(topic) {

    const peerPost = document.querySelector(".peer-post");

    peerPost.innerHTML = `
        <div class="avatar">
            ${topic.peerName.charAt(0)}
        </div>

        <div>
            <p class="student">
                ${topic.peerName}
            </p>

            <p class="peer-question">
                "${topic.peerQuestion}"
            </p>

            <button id="show-discussion" class="text-button">
                See what 3 classmates said →
            </button>
        </div>
    `;


    classDiscussion.innerHTML = `
        ${topic.replies.map(reply => `
            <div class="classmate-reply">

                <strong>${reply.name}</strong>

                <p>
                    ${reply.text}
                </p>

            </div>
        `).join("")}


        <div class="join-conversation">

            <p>
                <strong>Want a human perspective?</strong>
                You can join this conversation, or just keep reading.
            </p>

            <button id="join-button">
                Join the conversation
            </button>

        </div>
    `;


    classDiscussion.classList.add("hidden");


    const newShowDiscussion =
        document.getElementById("show-discussion");


    newShowDiscussion.addEventListener("click", function() {

        classDiscussion.classList.toggle("hidden");

        if (classDiscussion.classList.contains("hidden")) {

            newShowDiscussion.textContent =
                "See what 3 classmates said →";

        } else {

            newShowDiscussion.textContent =
                "Hide classmate responses ↑";

        }

    });
 // -------------------------------------
    // JOIN THE CLASSMATE CONVERSATION
    // -------------------------------------

const joinButton = document.getElementById("join-button");

if (joinButton) {

    joinButton.addEventListener("click", function() {

        const joinArea =
            document.querySelector(".join-conversation");

        joinArea.innerHTML = `
            <p>
                <strong>Add your perspective</strong>
            </p>

            <p class="sharing-reminder">
                🔒 Your Course Assistant conversation stays private.
                Only the message below will be shared with classmates.
            </p>

            <label for="classmate-reply">
                What would you like to add?
            </label>

            <textarea
                id="classmate-reply"
                class="reply-box"
                placeholder="Write something to your classmates..."
                rows="4"
            ></textarea>

            <div class="posting-actions">

                <button
                    id="cancel-reply"
                    class="cancel-button"
                >
                    Cancel
                </button>

                <button id="post-reply">
                    Post to classmates
                </button>

            </div>
        `;


        // POST BUTTON

        const postButton =
            document.getElementById("post-reply");


        postButton.addEventListener("click", function() {

            const replyBox =
                document.getElementById("classmate-reply");

            const reply =
                replyBox.value.trim();


            if (reply === "") {

                replyBox.focus();
                return;

            }


            const newReply =
                document.createElement("div");

            newReply.className =
                "classmate-reply adam-reply";


            newReply.innerHTML = `
                <div class="reply-heading">

                    <strong>Adam</strong>

                    <span>
                        Just now
                    </span>

                </div>

                <p>
                    ${escapeHTML(reply)}
                </p>

                <span class="posted-status">
                    ✓ Posted to classmates
                </span>
            `;


            classDiscussion.insertBefore(
                newReply,
                joinArea
            );


            joinArea.innerHTML = `
                <div class="post-success">

                    <strong>
                        Thanks for joining the conversation.
                    </strong>

                    <p>
                        Your message was shared with classmates.
                        Your Course Assistant conversation
                        remains private.
                    </p>

                </div>
            `;

        });


        // CANCEL BUTTON

        const cancelButton =
            document.getElementById("cancel-reply");


        cancelButton.addEventListener("click", function() {

            joinArea.innerHTML = `
                <p>
                    <strong>Want a human perspective?</strong>
                    You can join this conversation,
                    or just keep reading.
                </p>

                <button id="join-button">
                    Join the conversation
                </button>
            `;

            // Reconnect the button by rebuilding
            // the current peer conversation.

            updatePeerConversation(
                topics[currentTopic]
            );

            classDiscussion.classList.remove("hidden");

        });

    });

}
// CLOSE updatePeerConversation()
}

// -------------------------------------
// MAIN AI RESPONSE
// -------------------------------------

function answerQuestion() {

    const question = questionInput.value.trim();

    if (question === "") {
        questionInput.focus();
        return;
    }


    const detectedTopic = detectTopic(question);


    aiResponse.classList.remove("hidden");


    // QUESTION IS OUTSIDE PROTOTYPE

    if (detectedTopic === null) {

        responseText.innerHTML = `
            <p>
                <strong>This prototype currently demonstrates
                four MATH 110 topics.</strong>
            </p>

            <p>
                Try asking me about:
            </p>

            <p>
                • Standard deviation<br>
                • Z-scores<br>
                • Variance<br>
                • Mean or average
            </p>

            <p>
                In the full course version, the Course Assistant
                would support questions across the MATH 110
                course materials.
            </p>
        `;

        document.querySelector(".follow-up-buttons")
            .style.display = "none";

        document.querySelector(".peer-connection")
            .style.display = "none";


        aiResponse.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

        return;
    }


    // RECOGNIZED QUESTION

    currentTopic = detectedTopic;

    const topic = topics[currentTopic];


    document.querySelector(".follow-up-buttons")
        .style.display = "flex";

    document.querySelector(".peer-connection")
        .style.display = "block";


    responseText.innerHTML = topic.answer;

    updatePeerConversation(topic);


    aiResponse.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


// -------------------------------------
// ASK BUTTON + ENTER KEY
// -------------------------------------

askButton.addEventListener("click", answerQuestion);


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

        questionInput.value =
            button.textContent.trim();

        answerQuestion();

    });

});


// -------------------------------------
// FOLLOW-UP BUTTONS
// -------------------------------------

exampleButton.addEventListener("click", function() {

    responseText.innerHTML =
        topics[currentTopic].example;

});


anotherWayButton.addEventListener("click", function() {

    responseText.innerHTML =
        topics[currentTopic].anotherWay;

});


quizButton.addEventListener("click", function() {

    responseText.innerHTML =
        topics[currentTopic].quiz;

});


// -------------------------------------
// QUIZ ANSWER
// -------------------------------------

function revealQuizAnswer() {

    const existingFeedback =
        document.querySelector(".quiz-feedback");

    if (existingFeedback) {
        return;
    }


    responseText.insertAdjacentHTML(
        "beforeend",

        `
        <p class="quiz-feedback">
            ${topics[currentTopic].quizAnswer}
        </p>
        `
    );

}


// -------------------------------------
// INITIAL DISCUSSION BUTTON
// -------------------------------------

if (showDiscussion) {

    showDiscussion.addEventListener("click", function() {

        classDiscussion.classList.toggle("hidden");

    });

}
// -------------------------------------
// DISPLAY USER-WRITTEN TEXT SAFELY
// -------------------------------------

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent = text;

    return element.innerHTML;

}
// -------------------------------------
// ABOUT PROTOTYPE MODAL
// -------------------------------------

const aboutButton =
    document.getElementById("about-button");

const aboutModal =
    document.getElementById("about-modal");

const closeAbout =
    document.getElementById("close-about");


function openAboutModal() {

    aboutModal.classList.remove("hidden");

    closeAbout.focus();

}


function closeAboutModal() {

    aboutModal.classList.add("hidden");

    aboutButton.focus();

}


// OPEN

aboutButton.addEventListener("click", function() {

    openAboutModal();

});


// CLOSE BUTTON

closeAbout.addEventListener("click", function() {

    closeAboutModal();

});


// CLICK OUTSIDE WINDOW TO CLOSE

aboutModal.addEventListener("click", function(event) {

    if (event.target === aboutModal) {

        closeAboutModal();

    }

});


// ESCAPE KEY TO CLOSE

document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        !aboutModal.classList.contains("hidden")
    ) {

        closeAboutModal();

    }

});
