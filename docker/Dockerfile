FROM python:3.9.10-bullseye
WORKDIR /
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY . .
RUN pip install poetry
RUN  poetry install
# RUN pip install --no-cache-dir -r requirements.txt
CMD [ "docker-entrypoint.sh" ]