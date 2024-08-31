# Use Python as the base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Set environment variable for Flask
ENV FLASK_APP=backend/app.py

# Start the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]

EXPOSE 5000
