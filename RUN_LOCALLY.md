# Running the Flask Feedback App Locally

This guide will help you set up and run the Flask feedback collection application on your local computer.

## System Requirements

### Python Version
- **Python 3.11 or higher** (required)

### Python Dependencies
The application requires Flask and its dependencies:
- **Flask 3.1.2 or higher** (main web framework)

The following dependencies will be automatically installed with Flask:
- `blinker` (signals/events)
- `click` (command line interface) 
- `itsdangerous` (secure data serialization)
- `jinja2` (template engine)
- `markupsafe` (HTML escaping)
- `werkzeug` (WSGI utility library)

### Frontend Dependencies
*These are loaded via CDN, so no local installation needed:*
- **Bootstrap 5.1.3** (CSS framework)
- **Chart.js** (JavaScript charting library)

## Installation Steps

### Option 1: Using uv (recommended)
```bash
# Install uv package manager first
pip install uv

# Navigate to the project directory
cd your-project-folder

# Install dependencies using uv
uv sync
```

### Option 2: Using pip directly
```bash
# Navigate to the project directory
cd your-project-folder

# Install Flask
pip install flask>=3.1.2
```

### Option 3: Using pip with requirements file
Create a `requirements.txt` file with:
```
flask>=3.1.2
```

Then run:
```bash
pip install -r requirements.txt
```

## Required File Structure

Make sure your project has this structure:
```
your-project/
├── app.py
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── results.html
│   └── success.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

## Running the Application

### Basic Run
```bash
python app.py
```

### With Debug Mode (optional)
To enable debug mode for development:

**On Mac/Linux:**
```bash
export FLASK_DEBUG=true
python app.py
```

**On Windows:**
```bash
set FLASK_DEBUG=true
python app.py
```

## Accessing the Application

1. Open your web browser
2. Navigate to: **http://localhost:5000**
3. The feedback application will be running and accessible

## Application Features

- **Submit Feedback**: Rate experiences on a 1-5 star scale with optional comments
- **View Results**: See all feedback in table format and rating distribution charts
- **Real-time Updates**: Submitted feedback appears immediately in results

## Important Notes

- **No database required** - The app uses in-memory storage for simplicity
- **No additional server setup needed** - Uses Flask's built-in development server
- **Internet connection required** - For loading Bootstrap and Chart.js from CDN
- **Data persistence** - Feedback data will be lost when the application is restarted (stored in memory only)
- **Port 5000** - The application runs on localhost port 5000 by default

## Troubleshooting

### Common Issues

**"Module not found" error:**
- Make sure Flask is installed: `pip install flask`
- Check that you're using Python 3.11 or higher

**"Port already in use" error:**
- Another application might be using port 5000
- Stop other applications or change the port in `app.py`

**Templates not found:**
- Ensure the `templates/` directory exists with all HTML files
- Check that file paths match the directory structure above

**Static files not loading:**
- Ensure the `static/` directory exists with CSS and JS files
- Check browser developer tools for 404 errors

## Development

This is a development server setup. For production deployment, consider using a proper WSGI server like Gunicorn or uWSGI.