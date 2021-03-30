FROM node:12.4.0

# https://github.com/yarnpkg/yarn/issues/7329#issuecomment-500230357
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN npm install -g yarn

WORKDIR /app

COPY ./package*.json ./

RUN yarn

COPY . .

RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD yarn dev
