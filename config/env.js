if (process.env.DB_USERNAME && process.env.DB_PASSWORD) {
  // MySQL connection with credentials
  db_connection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306  // Default port for MySQL is 3306
  };
} else {
  // MySQL connection without credentials
  db_connection = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
  };
}




const env = {
  logFilePath: process.env.LOG_FILE_PATH,
  logFilePathDashboard: process.env.LOG_FILE_PATH_DASHBOARD,
  passwordExpiryDaysCount: process.env.PASSWORD_EXPIRY_DAYS_COUNT,
  dbConfig: {
    env: process.env.ENV,
    db: db_connection,
    port: process.env.DB_PORT,
    hostIp: process.env.DB_HOST,
    radisPort: process.env.REDIS_PORT
  },
  privateKey: process.env.APP_KEY,
  admin_email: process.env.ADMIN_EMAIL,
  admin_pass: process.env.ADMIN_PASS,
  downloads: process.env.DOWNLOADS,
  constantFilePath:process.env.CONSTANT_FILE_PATH,
  RESOURCEPATH: process.env.RESOURCE_PATH,
  APP_URL: process.env.APP_URL,


  DOMAIN_URL:process.env.DOMAIN_URL,
  MAIL_DRIVER:process.env.MAIL_DRIVER, 
  MAIL_HOST:process.env.MAIL_HOST,                                 
  MAIL_PORT:process.env.MAIL_PORT,                                               
  MAIL_USERNAME:process.env.MAIL_USERNAME,                                
  MAIL_PASSWORD:process.env.MAIL_PASSWORD,                                
  MAIL_ENCRYPTION:process.env.MAIL_ENCRYPTION,                               
  MAIL_FROM_ADDRESS : process.env.MAIL_FROM_ADDRESS,
  PRIMARY_FOLDER_PATH:process.env.PRIMARY_FOLDER_PATH,
  EXPORT_DATA:process.env.EXPORT_DATA,
  PRIMARY_API:process.env.PRIMARY_API,
}

module.exports = env;