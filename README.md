# Online HTML Editor and Viewer

## Overview

The Online HTML Editor and Viewer is a simple web application built with Flask that allows users to write and preview HTML code in real-time. It features a text area for HTML input and displays the rendered HTML output directly on the same page. Users can also drag and drop HTML files into the editor for easy file-based editing.

Live at: https://rasikhali.marveloussoft.tech

## Features

- **Real-Time HTML Preview**: Write HTML code in the text area and see the rendered output immediately.
- **Drag-and-Drop HTML File Support**: Drop HTML files into the editor to load and preview their content.
- **Dynamic Style Handling**: Extracts and applies styles from `<style>` tags in the HTML content.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/RasikhAli/Online-HTML-Editor-and-Viewer.git
   cd online-html-editor-viewer
   ```
   
2. **Create a Virtual Environment**
   ```bash
   python -m venv venv
   ```
   
3. **Activate the Virtual Environment**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - on macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the Application**
   ```bash
   python app.py
   ```
   Navigate to http://127.0.0.1:5000/ in your web browser to use the application.

6. **Usage**
   ```
    HTML Editing: Type or paste your HTML code into the text area.
    Preview: See the rendered HTML output below the editor.
    File Upload: Drag and drop HTML files into the text area to load their content.
   ```
6. **Contributing**
   Feel free to fork the repository, make changes, and create pull requests. For any issues or feature requests, please open an issue on GitHub.
