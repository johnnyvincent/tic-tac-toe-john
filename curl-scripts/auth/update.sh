ID= sh curl-scripts/auth/games.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --data `{}`


echo
