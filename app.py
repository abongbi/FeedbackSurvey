from flask import Flask, render_template, request, redirect, url_for, jsonify
from datetime import datetime

app = Flask(__name__)

# In-memory storage for feedback data
feedback_data = []

@app.route('/')
def index():
    """Main feedback form page"""
    return render_template('index.html')

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    """Handle feedback form submission"""
    rating = request.form.get('rating', type=int)
    comment = request.form.get('comment', '').strip()
    
    # Basic validation
    if not rating or rating < 1 or rating > 5:
        return render_template('index.html', error='Please select a rating between 1 and 5.')
    
    # Store feedback
    feedback_entry = {
        'rating': rating,
        'comment': comment,
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    feedback_data.append(feedback_entry)
    
    return render_template('success.html', rating=rating)

@app.route('/results')
def results():
    """Display feedback results with table and chart data"""
    # Calculate rating distribution for chart
    rating_counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    for feedback in feedback_data:
        rating_counts[feedback['rating']] += 1
    
    return render_template('results.html', 
                         feedback_data=feedback_data, 
                         rating_counts=rating_counts,
                         total_feedback=len(feedback_data))

@app.route('/api/chart_data')
def chart_data():
    """API endpoint for chart data"""
    rating_counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    for feedback in feedback_data:
        rating_counts[feedback['rating']] += 1
    
    return jsonify(rating_counts)

if __name__ == '__main__':
    import os
    debug_mode = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    app.run(host='0.0.0.0', port=5000, debug=debug_mode)