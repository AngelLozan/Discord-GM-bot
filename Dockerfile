FROM 534042329084.dkr.ecr.us-east-1.amazonaws.com/exodus/base-docker-images:amazonlinux-node16
WORKDIR /home/node
COPY bot.js packag*.json .
RUN npm ci
ENTRYPOINT [ "node", "bot.js" ]
EXPOSE 3000