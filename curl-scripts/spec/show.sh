API="http://localhost:4741"
URL_PATH="/specs"

curl "${API}${URL_PATH}/${SPEC_ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
      "spec": {
        "postId": "'"${POSTID}"'"
      }
    }'
echo