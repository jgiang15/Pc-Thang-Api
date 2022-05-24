  curl 'http://localhost:4741/specs' \
    --include \
    --request POST \
    --header "Authorization: Bearer ${TOKEN}" \
    --header "Content-Type: application/json" \
    --data '{
      "spec": {
        "motherboard": "'"${MB}"'",
        "gpu": "'"${GPU}"'",
        "ram": "'"${RAM}"'",
        "powersupply": "'"${POW}"'",
        "CPU": "'"${CPU}"'",
        "storage": "'"${STOR}"'",
        "postId": "'"${POSTID}"'",
        "owner": "'"${USER_ID}"'"
      }
    }'