# Install dependencies only when needed
FROM node:18-alpine AS deps

ARG ENV_NAME=dev
ARG APP_ENV=development

WORKDIR /app
RUN apk add --no-cache libc6-compat && \
    chown -R node:node /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi


FROM node:18-alpine AS builder
ARG ENV_NAME=dev
ARG APP_ENV=development
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build-${ENV_NAME}


# Production image, copy all the files and run next
FROM node:18-alpine AS runner


ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_ENV=production \
    PORT=3000

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static


USER node
EXPOSE ${PORT}

CMD ["node", "server.js"]
