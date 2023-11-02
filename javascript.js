function openNav() {
          document.getElementById("myNav").style.display = "block";/*Show curtain menu*/         
        }

function closeNav() {
          document.getElementById("myNav").style.display = "none";/*Hide the curtain menu*/
        }

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    const image = item.querySelector('img');
    const text = item.querySelector('p');
    image.addEventListener('mouseover', function() {
        this.style.opacity = 0.6;
        text.style.fontWeight = 'bold';
    });
	
    image.addEventListener('mouseout', function() {
        this.style.opacity = 1;
        text.style.fontWeight = 'normal';
    });
});



// Function to highlight the current page link
function highlightCurrentPageLink() {
    var currentPageURL = window.location.href;
    var links = document.querySelectorAll('.overlay-content a');

    links.forEach(function(link) {
        if (link.href === currentPageURL) {
            link.classList.add('highlight');
        } else {
            link.classList.remove('highlight');
        }
    });
}

// Call the function to highlight the current page link
highlightCurrentPageLink();


// Reference to login page for the Login button.
var loginButton = document.getElementById("login_button");
// Add a click event listener to the button
loginButton.addEventListener("click", function() {
 // Redirect to another page
    window.location.href = "login.html";
});
		
// Reference to login page for the free trail button.
var freeTrialButton = document.getElementById("free_trial_button");
// Add a click event listener to the button
freeTrialButton.addEventListener("click", function() {
// Redirect to another page
    window.location.href = "mainpage.html";
});

// Reference to login page for the continue to payment button.
var continueToPaymentButton = document.getElementById("continue_to_payment");
// Add a click event listener to the button
continueToPaymentButton.addEventListener("click", function() {
// Redirect to another page
    window.location.href = "payment.html";
});



		
		
		




