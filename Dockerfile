FROM 534042329084.dkr.ecr.us-east-1.amazonaws.com/exodus/base-docker-images:amazonlinux2023-node20
WORKDIR /home/node
COPY bot.js packag*.json container-entrypoint.js .
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci
ENTRYPOINT [ "node", "bot.js" ]
EXPOSE 3000
