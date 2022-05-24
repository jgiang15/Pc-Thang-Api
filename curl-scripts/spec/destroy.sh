 curl "http://localhost:4741/specs/${SPEC_ID}" \
    --include \
    --request DELETE \
    --header "Authorization: Bearer ${TOKEN}" \
    --header "Content-Type: application/json" \
    --data '{
      "spec": {
        "postId": "'"${POSTID}"'"
      }
    }'