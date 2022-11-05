#!/bin/bash
#docker run --rm -v /var/lib/docker/volumes/minecraftdata/_data/:/tmp/server/:ro -v /var/lib/docker/volumes/minecraftdata/_data/scripts/:/tmp/config/:ro -v /var/lib/docker/volumes/minecraftdata/_data/Overviewer/:/tmp/export/:rw -it marctv/minecraft-overviewer
git init
git add /var/lib/docker/volumes/minecraftdata/_data/Overviewer/*
git commit -m "Latest Commit"
git branch -M main
git remote add origin git@github.com:mikesull20/mc_overviewer.git
git push -u origin main
