document.addEventListener('DOMContentLoaded', function () {

    // Tab JS Start Here
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            //Close others tabs buttons
            tabButtons.forEach(otherButton => {
                otherButton.classList.remove('active');
            });
            //Active Current tab button
            button.classList.add('active');

            //Close Othere tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            //Active Current tab contents
            document.getElementById(targetTab).classList.add('active');
        });
    }); //Tab JS End Here
     

    // Scrollbar Div JavaScript Start Here Here
    const scrollableDiv = document.querySelector('.tabs');

    function checkOverflow() {
        if (scrollableDiv.scrollWidth > scrollableDiv.clientWidth) {
            scrollableDiv.classList.add('show-scrollbar');
        } else {
            scrollableDiv.classList.remove('show-scrollbar');
        }
    }
    checkOverflow(); // Initial check
    window.addEventListener('resize', checkOverflow);
    // Scrollbar Div JavaScript end here

});
