//=========================================
//==================PUERTO=================
//=========================================
process.env.PORT = process.env.PORT || 3000;
//=========================================
//==================BD=====================
//=========================================
process.env.DB_NAME = 'alkemy-db';
process.env.DB_USER = 'alkemy';
process.env.DB_PASS = 'alkemy';
//===============================
//Seed de autenticacion
//===============================
process.env.SEED = process.env.SEED || 'seed-desarrollo';

//===============================
//Vencimiento del token - 60 segundos *60minutos * 24horas *30dias
//===============================
process.env.CADUCIDAD_TOKEN = 60*60*24*30;
