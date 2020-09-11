function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("message").innerHTML = "SUCCESS";
        } else if(this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("FAILURE");
        }
    }

    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet);


function updateTweet() {
    // let tweetTitle = document.getElementById("title-input").value;

    let tweetData = {
        title: "New Title"
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        } else if(this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("FAILURE");
        }
    }

    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

updateTweet();


function deleteTweet() {
    

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        } else if(this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("FAILURE");
        }
    }

    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send();
}

deleteTweet();


function getTweet() {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let allTweets = JSON.parse(this.responseText);
            
            for (i = 0; i < allTweets.length; i++) {
                document.getElementById("displayTweets").innerHTML += "<h3>" + allTweets[i].title + "</h3>" + "<p>" + allTweets[i].body + "</p>";
                // document.getElementById("displayContent").innerHTML += "<p>" + allTweets[i].body + "</p>";
            }
        } else if(this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("FAILURE");
        }
    }

    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

getTweet();

