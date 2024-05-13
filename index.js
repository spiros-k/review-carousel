const users = {
    0 : {
        name: "Susan",
        img: "https://images.pexels.com/photos/21839012/pexels-photo-21839012.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        review: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                It usually begins with: “Lorem ipsum dolor sit amet"`
    },
    1 : {
        name: "Sam",
        img: "https://images.pexels.com/photos/23017587/pexels-photo-23017587.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        review: `The purpose of lorem ipsum is to create a natural looking block of text. 
                Laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. `,
    },
    2 : {
        name: "Anna",
        img: "https://images.pexels.com/photos/21855286/pexels-photo-21855286.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        review: `The placeholder text, beginning with the line 
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. `,
    },
    3 : {
        name: "Kate",
        img: "https://images.pexels.com/photos/23379618/pexels-photo-23379618.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        review: `As an alternative theory someone tracked down a 1914 Latin edition of De Finibus. The 1914 Loeb Classical Library Edition ran out 
                of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling 
                with “do-”, while another begins with the now ubiquitous “lorem ipsum”. `,
    },
    4 : {
        name: "Maria",
        img: "https://images.pexels.com/photos/20157907/pexels-photo-20157907.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        review: `It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although 
                McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't 
                relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that 
                the filler text has been used for centuries. `,
    },
    5 : {
        name: "Sandy",
        img: "https://images.pexels.com/photos/19138621/pexels-photo-19138621.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        review: `McClintock wrote:
                “What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s 
                took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter
                resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. 
                It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek;"`,
    },
}

let currentReview;

document.addEventListener("DOMContentLoaded", (event) => {
    currentReview = 0;
    userName = users[currentReview].name;
    document.getElementById("user-name").textContent = userName;
    userReview = users[currentReview].review;
    document.getElementById("user-review").textContent = userReview;
    userImage = users[currentReview].img;
    document.getElementById("user-img").src = userImage;
})


 document.getElementById("previous-review").addEventListener("click", function previousReviewFunction() {

    switch((document.getElementById("user-name").textContent)) {
        case users[5].name:
            userName = users[5].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[5].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[5].img;
            document.getElementById("user-img").src = userImage;
        case users[5].name:
            userName = users[4].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[4].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[4].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[4].name:
            userName = users[3].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[3].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[3].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[3].name:
            userName = users[2].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[2].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[2].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[2].name:
            userName = users[1].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[1].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[1].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[1].name:
            userName = users[0].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[0].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[0].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[0].name:
            userName = users[5].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[5].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[5].img;
            document.getElementById("user-img").src = userImage;
    }
 })


document.getElementById("next-review").addEventListener("click", () => {

    switch((document.getElementById("user-name").textContent)) {
        case users[1].name:
            userName = users[1].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[1].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[1].img;
            document.getElementById("user-img").src = userImage;  
        case users[1].name:
            userName = users[2].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[2].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[2].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[2].name:
            userName = users[3].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[3].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[3].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[3].name:
            userName = users[4].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[4].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[4].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[4].name:
            userName = users[5].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[5].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[5].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[5].name:
            userName = users[0].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[0].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[0].img;
            document.getElementById("user-img").src = userImage;
            break;
        case users[0].name:
            userName = users[1].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[1].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[1].img;
            document.getElementById("user-img").src = userImage;
    }
})


document.getElementById("random-review").addEventListener("click", () => {

    randomNum = Math.floor(Math.random() * Object.keys(users).length);
    switch(randomNum) {
        case 0:
            userName = users[0].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[0].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[0].img;
            document.getElementById("user-img").src = userImage;
            break;
        case 1:
            userName = users[1].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[1].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[1].img;
            document.getElementById("user-img").src = userImage;
            break;
        case 2:
            userName = users[2].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[2].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[2].img;
            document.getElementById("user-img").src = userImage;
            break;
        case 3:
            userName = users[3].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[3].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[3].img;
            document.getElementById("user-img").src = userImage;
            break;
        case 4:
            userName = users[4].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[4].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[4].img;
            document.getElementById("user-img").src = userImage;
            break;
        case 5:
            userName = users[5].name;
            document.getElementById("user-name").textContent = userName;
            userReview = users[5].review;
            document.getElementById("user-review").textContent = userReview;
            userImage = users[5].img;
            document.getElementById("user-img").src = userImage;
            break;
    }
})
