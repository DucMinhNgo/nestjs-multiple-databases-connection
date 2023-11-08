docker network create replicanet

docker run -d --name=master --net=replicanet --hostname=master -p 3308:3306 \
  -v $PWD/d0:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=mypass \
  mysql/mysql-server:5.7 \
  --server-id=1 \
  --log-bin='mysql-bin-1.log'

docker run -d --name=slave1 --net=replicanet --hostname=slave1 -p 4309:3306 \
  -v $PWD/data/d1:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=mypass \
  mysql/mysql-server:latest \
  --server-id=2

docker run -d --name=slave2 --net=replicanet --hostname=slave2 -p 4310:3306 \
  -v $PWD/data/d2:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=mypass \
  mysql/mysql-server:latest \
  --server-id=3

docker exec -it master mysql -uroot -pmypass -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'mypass' WITH GRANT OPTION;FLUSH PRIVILEGES;"

# Note update
mysql -uroot -pmypass

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'mypass' WITH GRANT OPTION;
FLUSH PRIVILEGES;
