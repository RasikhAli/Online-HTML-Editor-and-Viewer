document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('html_content');
    const output = document.getElementById('output');

    textarea.addEventListener('input', function() {
        const htmlContent = textarea.value;
        output.innerHTML = htmlContent;

        // Extract and apply styles from <style> tags
        const styleTags = htmlContent.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
        const styleContent = styleTags.map(tag => tag.replace(/<\/?style[^>]*>/gi, '')).join('\n');
        const styleElement = document.createElement('style');
        styleElement.textContent = styleContent;
        
        // Clear previous styles and apply new ones
        document.querySelectorAll('head style').forEach(style => style.remove());
        document.head.appendChild(styleElement);
    });

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        textarea.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight textarea when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        textarea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        textarea.addEventListener(eventName, unhighlight, false);
    });

    // Handle drop event
    textarea.addEventListener('drop', handleDrop, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(e) {
        textarea.classList.add('highlight');
    }

    function unhighlight(e) {
        textarea.classList.remove('highlight');
    }

    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;

        handleFiles(files);
    }

    function handleFiles(files) {
        [...files].forEach(file => {
            if (file.type === 'text/html') {
                let reader = new FileReader();
                reader.readAsText(file);
                reader.onloadend = function() {
                    textarea.value = reader.result;
                    const htmlContent = reader.result;
                    output.innerHTML = htmlContent;
                    
                    // Extract and apply styles from <style> tags
                    const styleTags = htmlContent.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
                    const styleContent = styleTags.map(tag => tag.replace(/<\/?style[^>]*>/gi, '')).join('\n');
                    const styleElement = document.createElement('style');
                    styleElement.textContent = styleContent;
                    
                    // Clear previous styles and apply new ones
                    document.querySelectorAll('head style').forEach(style => style.remove());
                    document.head.appendChild(styleElement);
                };
            } else {
                alert("Please drop an HTML file.");
            }
        });
    }
});
