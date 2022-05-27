TOKEN="a877b2e9bb1716b6912b0161d39444a5" 
MB="test motherboard"
GPU="3070ti"
RAM="16gb"
POW="600watt"
CPU="ryzen"
STOR="1tb"
POSTID="628c23e36db79e2373050c95"
USER_ID="628bf7118ff9551f4e068265"
 
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
        "cpu": "'"${CPU}"'",
        "storage": "'"${STOR}"'",
        "postId": "'"${POSTID}"'",
        "owner": "'"${USER_ID}"'"
      }
    }'