#!/bin/bash

echo "Waiting for database on port"
wait-for-it.sh –-host=db --port=5432 --strict --timeout=60 --

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Start server
echo "Starting server"
python manage.py runserver 0.0.0.0:8000
