#!/bin/bash

# Inicia la aplicación web
yarn run dev

# Inicia el servidor
yarn run server &
sleep 3 # Espera 3 segundos para asegurarte de que el servidor está corriendo


