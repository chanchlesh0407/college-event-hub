const messages = ["SGSITS College Hub", "Innovation & Creativity", "Your Event Destination"];
        let index = 0;
        const dynamicText = document.querySelector(".dynamic-text");

        function typeMessage() {
            let message = messages[index];
            let i = 0;
            dynamicText.textContent = "";
            const interval = setInterval(() => {
                dynamicText.textContent += message[i];
                i++;
                if (i === message.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        index = (index + 1) % messages.length;
                        typeMessage();
                    }, 2000);
                }
            }, 100);
        }
        typeMessage();

        // Duplicate event cards for infinite loop
        document.addEventListener("DOMContentLoaded", function() {
            const container = document.getElementById("event-container");
            container.innerHTML += container.innerHTML; // Duplicate for seamless scrolling
        });