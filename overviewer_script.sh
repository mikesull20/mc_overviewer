#!/bin/sh
docker run --rm -v /var/lib/docker/volumes/minecraftdata/_data/:/tmp/server/:ro -v /var/lib/docker/volumes/minecraftdata/_data/scripts/:/tmp/config/:ro -v /var/lib/docker/volumes/minecraftdata/_data/Overviewer/:/tmp/export/:rw -it marctv/minecraft-overviewer
git -C /var/lib/docker/volumes/minecraftdata/_data/Overviewer/ init
git -C /var/lib/docker/volumes/minecraftdata/_data/Overviewer/ reset
git -C /var/lib/docker/volumes/minecraftdata/_data/Overviewer/ add /var/lib/docker/volumes/minecraftdata/_data/Overviewer/*
git -C /var/lib/docker/volumes/minecraftdata/_data/Overviewer/ commit -m "Latest Commit"
git -C /var/lib/docker/volumes/minecraftdata/_data/Overviewer/ branch -M main
git -C /var/lib/docker/volumes/minecraftdata/_data/Overviewer/ remote add origin git@github.com:mikesull20/mc_overviewer.git
git -C /var/lib/docker/volumes/minecraftdata/_data/Overviewer/ push -u origin main
