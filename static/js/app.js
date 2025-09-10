// Star rating functionality
document.addEventListener('DOMContentLoaded', function() {
    const starRating = document.querySelector('.star-rating');
    const ratingText = document.querySelector('.rating-text small');
    
    if (starRating) {
        const labels = starRating.querySelectorAll('label');
        const inputs = starRating.querySelectorAll('input[type="radio"]');
        
        // Update rating text on hover
        labels.forEach((label, index) => {
            label.addEventListener('mouseenter', function() {
                const rating = 5 - index;
                updateRatingText(rating);
            });
        });
        
        // Reset text on mouse leave
        starRating.addEventListener('mouseleave', function() {
            const checkedInput = starRating.querySelector('input[type="radio"]:checked');
            if (checkedInput) {
                updateRatingText(checkedInput.value);
            } else {
                ratingText.textContent = 'Click a star to rate (1-5)';
            }
        });
        
        // Update text when rating is selected
        inputs.forEach(input => {
            input.addEventListener('change', function() {
                if (this.checked) {
                    updateRatingText(this.value);
                }
            });
        });
    }
    
    function updateRatingText(rating) {
        const messages = {
            1: '1 star - Poor',
            2: '2 stars - Fair', 
            3: '3 stars - Good',
            4: '4 stars - Very Good',
            5: '5 stars - Excellent'
        };
        ratingText.textContent = messages[rating] || 'Click a star to rate (1-5)';
    }
});

// Chart initialization for results page
function initializeChart() {
    const ctx = document.getElementById('ratingChart');
    if (!ctx) return;
    
    // Fetch chart data from API
    fetch('/api/chart_data')
        .then(response => response.json())
        .then(data => {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
                    datasets: [{
                        label: 'Number of Ratings',
                        data: [data[1], data[2], data[3], data[4], data[5]],
                        backgroundColor: [
                            '#dc3545',
                            '#fd7e14', 
                            '#ffc107',
                            '#28a745',
                            '#198754'
                        ],
                        borderColor: [
                            '#c82333',
                            '#e8690b',
                            '#e0a800',
                            '#1e7e34',
                            '#145c32'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Rating Distribution'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error loading chart data:', error);
        });
}

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[action*="submit_feedback"]');
    if (form) {
        form.addEventListener('submit', function(e) {
            const ratingInput = form.querySelector('input[name="rating"]:checked');
            if (!ratingInput) {
                e.preventDefault();
                alert('Please select a rating before submitting.');
                return false;
            }
        });
    }
});