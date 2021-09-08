# Tech Challenge - Kanopi

<br/><br/>

# Architecture

| Component | Approach                                   | Notes                                                                                                                                                          |
| --------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend  | [React](https://reactjs.org/)              | - Bootstrapped by [create-react-app](https://github.com/facebook/create-react-app) <br/> - [ANT Design](https://github.com/ant-design/ant-design) UI Framework |
| Backend   | [Django](https://github.com/django/django) |
| Database  | [MySQL](https://www.mysql.com/)            |                                                                                                                                                                |

<br/><br/>

# How to run

## Prerequisites

1. [Docker Compose](https://docs.docker.com/compose/install/)

<br/>

## Running the project

1. docker-compose up --build
2. open your browser and goto  http://localhost:3001
   <br/>

## First time migration

1. docker exec -it kanopi-task_backend bash
2. python manage.py makemigrations
3. python manage.py migrate

## install node modules
1. open terminal on project root
2. cd frontend
3. npm install


## load initial data
python manage.py loaddata rgb_hsl.json

## load BRGB data (optional)
python manage.py loaddata brgb.json