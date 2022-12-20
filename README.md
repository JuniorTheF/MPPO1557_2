# MPPO1557_2
МППО проект(Мониторинг комплекса энергоснабжения)

# Setup (bare metal)
    npm i
    npm start

# Setup (Docker)
    docker build -t frontend:latest .
    docker run --name frontend -p 3000:3000 frontend

# Setup (docker-compose)
    docker-compose build
    docker-compose up