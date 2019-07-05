# Vueker

Project front with Docker and Vue

[demo](https://jjhoncv.github.io/vueker)

## Features

- Version Docker 18
- Version de Node 12
- Version de Vue 2.6.10

## Use mode
Steps to work

### 1. Build image docker
build the node image to use
```sh
make build.image
```

### 2. Install dependencies
Install the node dependencies for our project 
```sh
make npm.install
```

### 3. Build project
build our project
```sh
make gulp.build
```

### 4. Start watch project
watch start our project
```sh
make start
```

### 5. Stop watch project
watch stop our project
```sh
make stop
```

### 6. Show logs watch project
watch logs our project
```sh
make logs
```
