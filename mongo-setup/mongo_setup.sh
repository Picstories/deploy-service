#!/bin/bash

sleep 10
echo mongo_setup.sh time now: `date +"%T" `
echo "Setting replicas."
mongo --host mongo:27017 <<EOF
  var cfg = {
    "_id": "rs0",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "mongo:27017"
      }
    ]
  };
  rs.initiate(cfg);
EOF
echo "Replica config applied"
sleep 30
echo "******************************************Database replicas************************************************************************"
script=`cat /scripts/mongo-init.js`
echo "Writing to mongo db: $script"
mongo --host rs0/mongo:27017 --eval "$script"