# Influenced by https://github.com/strapi/community-content/issues/813#issuecomment-1205095562
FROM node:16

WORKDIR /app

ADD ./package.json /app

ADD ./yarn.lock /app

RUN yarn install --frozen-lockfile

ADD . /app

RUN yarn seed

EXPOSE 1337

CMD ["yarn", "develop"]
