# existing details: h@h8
# password: fun

# EMAIL=h@h8 PASSWORD=fun sh curl-scripts/auth/sign-in.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/new-game" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
    }'

echo
