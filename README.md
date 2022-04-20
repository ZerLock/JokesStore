# JokesStore

A ReactTS web application to get jokes, save them and retrieve them on a special page

## How does it work?

Two pages, one that get randomly jokes with an API request. And the second one is to retrive your saves jokes that save the joke ID.

## Getting Started

### Installation

**1) Install Docker**  
Follow this [official guide](https://docs.docker.com/get-docker/) to install Docker.  
If you want to play a little bit with Docker, you can follow this [tutorial](https://docker-curriculum.com) or even our [workshop](https://github.com/PoCInnovation/Workshops/tree/master/software/04.Docker) !

**2) Install JokesStore**
```
# Get the project
git clone git@github.com:ZerLock/JokesStore.git
cd JokesStore

# Build JokesStore docker image
docker build . -t jokes:latest
```

### Quickstart

[Explain how to run this project]

### Usage

Run JokesStore
```
# Run JokesStore docker image
docker run -p 3000:3000 jokes:latest
```


