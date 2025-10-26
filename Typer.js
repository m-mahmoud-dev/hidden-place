document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("typewriter").innerHTML; // Original HTML
    let i = 0;
    let tempHTML = ""; // A buffer for the content
    document.getElementById("typewriter").innerHTML = ""; // Clear the initial content
  
    function typeWriter() {
        if (i < text.length) {
            tempHTML += text[i]; // Add one character to the buffer
            document.getElementById("typewriter").innerHTML = tempHTML; // Render the HTML buffer
            i++;
            setTimeout(typeWriter, 5); // Adjust speed here (50ms per character)
        } else {
            // Dispatch an event when the typewriter animation is done
            const event = new Event("typewriterComplete");
            document.dispatchEvent(event);
        }
    }
  
    typeWriter();
  });
  