API="http://localhost:4741"
URL_PATH="/specs"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"
  --header "Content-Type: application/json" \

echo
