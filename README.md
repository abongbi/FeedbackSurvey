# Running the Flask Feedback App Locally on Windows

This guide provides Windows-specific instructions for setting up and running the Flask feedback collection application on your local Windows computer.

## Windows System Requirements

### Python Installation
- **Python 3.11 or higher** (required)
- Download from: https://python.org/downloads/
- **Important**: During installation, check "Add Python to PATH"

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

## Windows Installation Commands

### Option 1: Using uv (recommended)
```cmd
# Install uv package manager
pip install uv

# Navigate to project directory
cd C:\path\to\your\project

# Install dependencies
uv sync
```

### Option 2: Using pip directly
```cmd
# Navigate to project directory
cd C:\path\to\your\project

# Install Flask
pip install flask>=3.1.2
```

### Option 3: Using requirements.txt
Create `requirements.txt` with:
```
flask>=3.1.2
```
Then run:
```cmd
pip install -r requirements.txt
```

## Required Windows File Structure

Make sure your project has this structure:
```
your-project\
├── app.py
├── templates\
│   ├── base.html
│   ├── index.html
│   ├── results.html
│   └── success.html
└── static\
    ├── css\
    │   └── style.css
    └── js\
        └── app.js
```

## Windows Run Commands

### Basic Run
```cmd
python app.py
```

### With Debug Mode
```cmd
# Set environment variable for debug mode
set FLASK_DEBUG=true
python app.py
```

### Alternative Debug Setup (Single Command)
```cmd
# Set environment variable and run in one line
set FLASK_DEBUG=true && python app.py
```

## Accessing the Application

1. Open your web browser
2. Navigate to: **http://localhost:5000** or **http://127.0.0.1:5000**
3. The feedback application will be running and accessible

## Quick Start Guide for Windows

```cmd
# 1. Install Python 3.11+ from python.org (check "Add Python to PATH")
# 2. Open Command Prompt (Win + R, type "cmd", press Enter)
# 3. Navigate to your project folder
cd C:\your\project\folder

# 4. Install Flask
pip install flask

# 5. Run the application
python app.py

# 6. Open browser to http://localhost:5000
```

## Windows-Specific Notes

### Command Prompt Syntax
- Use `set` instead of `export` for environment variables
- Use backslashes `\` for file paths in Windows
- Use `&&` to chain multiple commands

### Compatible Windows Environments
- **Command Prompt** (cmd)
- **PowerShell**
- **Git Bash**
- **Windows Terminal**

### IDE Compatibility
- Works with any Python IDE (VS Code, PyCharm, IDLE, etc.)
- Compatible with Windows 10 and Windows 11

### Network Access
- **Local Access**: http://localhost:5000
- **Network Access**: http://127.0.0.1:5000
- To access from other devices on your network, use your computer's IP address

## Application Features

- **Submit Feedback**: Rate experiences on a 1-5 star scale with optional comments
- **View Results**: See all feedback in table format and rating distribution charts
- **Real-time Updates**: Submitted feedback appears immediately in results

## Important Notes

- **No database required** - The app uses in-memory storage for simplicity
- **No additional server setup needed** - Uses Flask's built-in development server
- **Internet connection required** - For loading Bootstrap and Chart.js from CDN
- **Data persistence** - Feedback data will be lost when the application is restarted (stored in memory only)
- **Default port** - The application runs on localhost port 5000 by default

## Windows Troubleshooting

### Common Windows Issues

**"Python is not recognized" error:**
- Reinstall Python and check "Add Python to PATH" during installation
- Or manually add Python to your Windows PATH environment variable

**"Module not found" error:**
- Make sure Flask is installed: `pip install flask`
- Check that you're using Python 3.11 or higher: `python --version`

**"Port already in use" error:**
- Another application might be using port 5000
- Close other applications or restart your computer
- Or change the port in `app.py` (line with `app.run`)

**"Permission denied" error:**
- Run Command Prompt as Administrator
- Or use a different directory where you have write permissions

**Templates not found:**
- Ensure the `templates\` directory exists with all HTML files
- Check that file paths match the directory structure above
- Use backslashes `\` in Windows file paths

**Static files not loading:**
- Ensure the `static\` directory exists with CSS and JS files
- Check browser developer tools (F12) for 404 errors
- Verify files are in the correct subdirectories

### Windows Firewall
- Windows may ask for firewall permission when first running Flask
- Allow Python/Flask through the firewall for local development

## Development Tips

- Use **Windows Terminal** for a better command line experience
- Consider using **VS Code** with Python extension for development
- This is a development server setup - for production, use a proper WSGI server
