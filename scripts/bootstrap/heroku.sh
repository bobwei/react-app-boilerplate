heroku addons:create mongolab:sandbox --app ${HEROKU_APP}
heroku addons:create newrelic:wayne --app ${HEROKU_APP}
heroku addons:create papertrail:choklad --app ${HEROKU_APP}
