# Basic Node Setup
sudo yum install npm
npm install
npm install pm2

# Setup nginx
sudo yum -y install nginx
sudo amazon-linux-extras install epel
sudo yum install certbot

sudo cp nginx.conf /etc/nginx/nginx.conf
nginx -t && nginx

# Incase certbot needs to be ran manually
# letsencrypt certonly --manual --preferred -challenges=dns -d giftorino.com -d *.giftorino.com

# Give start script permissions and run it
chmod 777 ./start.sh
./start.sh