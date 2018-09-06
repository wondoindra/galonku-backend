"use strict";

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const merchantPassword = process.env.MERCHANT_PASSWORD;
const merchantPassword2 = process.env.MERCHANT_PASSWORD2;
const merchantPassword3 = process.env.MERCHANT_PASSWORD3;
const merchantPassword4 = process.env.MERCHANT_PASSWORD4;
const merchantPassword5 = process.env.MERCHANT_PASSWORD5;
const merchantPassword6 = process.env.MERCHANT_PASSWORD6;
const merchantPassword7 = process.env.MERCHANT_PASSWORD7;
const merchantPassword8 = process.env.MERCHANT_PASSWORD8;
const merchantPassword9 = process.env.MERCHANT_PASSWORD9;
const merchantPassword10 = process.env.MERCHANT_PASSWORD10;

const doEncryptPassword = (textPassword, salt = 5) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(merchantPassword, salt).then(result => {
      resolve(result);
    });
  });
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const merchants = [
      {
        username: "watiwater",
        store_name: "Wati Water",
        email: "watiwater@mail.com",
        phone_number: "081123189023",
        identity_number: "1098223417582934",
        price: "0",
        address: "Jalan Raja Ali Haji no.25",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "ibrahimwater",
        store_name: "ibrahim Water",
        email: "ibrahim@mail.com",
        phone_number: "082123189011",
        identity_number: "1093203411562934",
        price: "0",
        address: "Batu besar Blok Y No.27",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "agungdepot",
        store_name: "Depot Air Agung",
        email: "agungdepot@mail.com",
        phone_number: "083125689023",
        identity_number: "1028573407882934",
        price: "0",
        address: "Bunga Raya Blok A",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "sriratuwater",
        store_name: "Sri Ratu Water",
        email: "sriratu@mail.com",
        phone_number: "085323109223",
        identity_number: "1098214007582934",
        price: "0",
        address: "Batu Aji No.5",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "nirmalasuryawater",
        store_name: "Nirmala Surya Water",
        email: "nirmalasurya@mail.com",
        phone_number: "082160129023",
        identity_number: "0125623417582934",
        price: "0",
        address: "Raden Patah No.17",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "buanadepot",
        store_name: "Depot Buana",
        email: "buanadepot@mail.com",
        phone_number: "085122461023",
        identity_number: "1257993417582934",
        price: "0",
        address: "Jalan Hang Lekiu No.11",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "andromedagalon",
        store_name: "Andromeda Galon",
        email: "andromedagalon@mail.com",
        phone_number: "081340089023",
        identity_number: "1998223417582934",
        price: "0",
        address: "Jalan Diponegoro Blok A2",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "cahyadepot",
        store_name: "Cahya Depot",
        email: "cahyadepot@mail.com",
        phone_number: "085253780023",
        identity_number: "1098222346882934",
        price: "0",
        address: "Laksamana Bintan Blok DD No.22",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "indahfilldepot",
        store_name: "Indah Fill Depot",
        email: "indahfilldepot@mail.com",
        phone_number: "081512386723",
        identity_number: "1098242478902934",
        price: "0",
        address: "Yos Sudarso 2 Blok S2 No.11",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "adiairmaju",
        store_name: "Adi Air Maju",
        email: "adiairmaju@mail.com",
        phone_number: "082156789123",
        identity_number: "1098243219000934",
        price: "0",
        address: "Palapa B 27",
        status: "pending",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      }
    ];

    await doEncryptPassword(merchantPassword, saltRounds).then(newPassword => {
      merchants[0].password = newPassword;
    });

    await doEncryptPassword(merchantPassword2, saltRounds).then(newPassword => {
      merchants[1].password = newPassword;
    });

    await doEncryptPassword(merchantPassword3, saltRounds).then(newPassword => {
      merchants[2].password = newPassword;
    });

    await doEncryptPassword(merchantPassword4, saltRounds).then(newPassword => {
      merchants[3].password = newPassword;
    });

    await doEncryptPassword(merchantPassword5, saltRounds).then(newPassword => {
      merchants[4].password = newPassword;
    });

    await doEncryptPassword(merchantPassword6, saltRounds).then(newPassword => {
      merchants[5].password = newPassword;
    });

    await doEncryptPassword(merchantPassword7, saltRounds).then(newPassword => {
      merchants[6].password = newPassword;
    });

    await doEncryptPassword(merchantPassword8, saltRounds).then(newPassword => {
      merchants[7].password = newPassword;
    });

    await doEncryptPassword(merchantPassword9, saltRounds).then(newPassword => {
      merchants[8].password = newPassword;
    });

    await doEncryptPassword(merchantPassword10, saltRounds).then(
      newPassword => {
        merchants[9].password = newPassword;
      }
    );

    return queryInterface.bulkInsert("merchants", merchants, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("merchants", null, {});
  }
};
