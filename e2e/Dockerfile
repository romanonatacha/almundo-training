FROM cypress/base:10
COPY e2e/ /opt/app/
WORKDIR /opt/app
RUN npm i --silent
ENV NO_COLOR 1
ENV CYPRESS_BASE_URL https://almundo.com.ar
CMD npm test
