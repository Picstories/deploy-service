FROM python:latest

RUN pip install 'mongo-connector[elastic5]' && \
  pip install 'elastic2-doc-manager[elastic5]' && \
  pip install pathlib2

RUN mkdir /conf && mkdir /var/log/mongo-connector
COPY ./config.json /conf/

CMD ["mongo-connector", "-c", "/conf/config.json"]