IMAGE=<%= image %>
PORT=<%= port %>
CONTAINER_ID=$(shell docker container ls | awk '$$2 == "'${IMAGE}'" {print $$1}')

container-id:
	@echo ${CONTAINER_ID}

start:
	docker run -itd -p ${PORT}:${PORT} ${IMAGE}

stop:
	docker stop ${CONTAINER_ID}

restart: stop start

remove:
	docker container rm ${CONTAINER_ID}

check-running:
	@if [ -z "${CONTAINER_ID}" ]; then\
		make start;\
    fi \

status:
	@echo "todo"
