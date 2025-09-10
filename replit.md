# Overview

This is a customer feedback collection web application built with Flask. It allows users to submit star ratings (1-5) with optional comments and view aggregated feedback results through interactive charts and tables. The application provides a simple, user-friendly interface for gathering and visualizing customer satisfaction data.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask for server-side rendering
- **UI Framework**: Bootstrap 5 for responsive design and components
- **JavaScript**: Vanilla JS for interactive star rating functionality
- **Charting**: Chart.js for data visualization on results page
- **CSS**: Custom styles for star rating component and visual enhancements

## Backend Architecture
- **Web Framework**: Flask with standard routing and form handling
- **Data Storage**: In-memory Python list for feedback entries (temporary storage)
- **Form Processing**: Flask's request.form for POST data handling
- **Validation**: Basic server-side validation for rating values
- **API Endpoints**: RESTful routes for form submission and chart data

## Application Structure
- **MVC Pattern**: Separation of routes (controllers), templates (views), and data models
- **Static Assets**: Organized CSS and JavaScript files in static directory
- **Template Inheritance**: Base template with extending child templates
- **Error Handling**: Form validation with user-friendly error messages

## Data Model
- **Feedback Entry**: Dictionary containing rating (1-5), comment (optional), and timestamp
- **Rating Distribution**: Calculated aggregation for chart visualization
- **Timestamp Format**: Human-readable datetime strings for display

# External Dependencies

## Frontend Libraries
- **Bootstrap 5.1.3**: CSS framework via CDN for responsive UI components
- **Chart.js**: JavaScript charting library via CDN for rating distribution visualization

## Backend Dependencies  
- **Flask**: Python web framework for routing, templating, and request handling
- **datetime**: Python standard library for timestamp generation

## Development Notes
- Currently uses in-memory storage which resets on application restart
- No database persistence layer implemented
- No user authentication or session management
- Ready for database integration (could easily add SQLite, PostgreSQL, or other databases)