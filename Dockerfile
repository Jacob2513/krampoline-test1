FROM krmp-d2hub-idock.9rum.cc/goorm/node:18
RUN echo `pwd`
COPY krampoline/ ./
RUN npm i
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]