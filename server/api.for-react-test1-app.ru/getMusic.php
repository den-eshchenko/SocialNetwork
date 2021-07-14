<?php
function getMusic(){
    $dataMusic = file_get_contents("./music/description_tracks.json");
    echo $dataMusic;
}