#!/bin/bash

/bin/bash ./env.sh $1
envsubst '$${PORT} $${SERVER_NAME}' < /etc/nginx/templates/nginx.conf.template > ./nginx.conf
exec "${@:2}"
