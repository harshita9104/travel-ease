FROM python:3.9

WORKDIR /travel_ai

COPY ./requirements.txt /travel_ai/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /travel_ai/requirements.txt

COPY ./app /travel_ai/app

CMD ["uvicorn", "app.main:app", "--host", "--port", "8000"]
