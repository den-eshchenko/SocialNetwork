<?php
function setLikeTrack($data){
    
    if($data == 1){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    } 
    if($data == 2){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 3){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 4){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 5){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 6){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 7){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 8){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 9){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 10){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 11){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 12){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 13){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 14){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 15){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }
    if($data == 16){
        $json = file_get_contents('./music/description_tracks.json');
        $json = json_decode($json, true);
        $json['items'][$data-1]['like'] = !$json['items'][$data-1]['like'];
        $newJsonString = json_encode($json, JSON_UNESCAPED_SLASHES);
        file_put_contents('./music/description_tracks.json', $newJsonString);
    }

    $response = [
        "message" => "Вы добавили трек себе!",
        "status" => 1

    ];
    echo json_encode($response);
}


