FROM python:3.9-slim

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /usr/src/app
RUN apt-get update && \
    apt-get install -y vim && \
    pip3 install -r requirements.txt
COPY . /usr/src/app

EXPOSE 9098
# EXPOSE 9093

# CMD ["sh", "-c", "python3 manage.py run_huey & python3 manage.py runserver 0.0.0.0:9098"]
# for staging
CMD ["sh", "-c", "python3 manage.py runserver 0.0.0.0:9098"]
# for production
# CMD ["sh", "-c", "python3 manage.py runserver 0.0.0.0:9093"]
