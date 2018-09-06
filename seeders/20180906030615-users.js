"use strict";

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const userPassword = process.env.USER_PASSWORD;
const userPassword2 = process.env.USER_PASSWORD2;
const userPassword3 = process.env.USER_PASSWORD3;
const userPassword4 = process.env.USER_PASSWORD4;
const userPassword5 = process.env.USER_PASSWORD5;
const userPassword6 = process.env.USER_PASSWORD6;
const userPassword7 = process.env.USER_PASSWORD7;
const userPassword8 = process.env.USER_PASSWORD8;
const userPassword9 = process.env.USER_PASSWORD9;
const userPassword10 = process.env.USER_PASSWORD10;

const doEncryptPassword = (textPassword, salt = 5) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(userPassword, salt).then(result => {
      resolve(result);
    });
  });
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        username: "lestariraja",
        email: "lestariraja@mail.com",
        fullname: "Lestari Raja",
        phone_number: "081224561083",
        address: "Agung Permai Residence Blok B No.11",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "mansurdarma",
        email: "mansurdarma@mail.com",
        fullname: "Mansur Darma",
        phone_number: "087822456083",
        address: "Airis Tiban Permai No.123",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "nurulhidayatmade",
        email: "nurulhidayatmade@mail.com",
        fullname: "Nurul Hidayat Made",
        phone_number: "085324561083",
        address: "Baloi Impian Blok G No.22",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "lutfihidayat",
        email: "lutfihidayat@mail.com",
        fullname: "Lutfi Hidayat",
        phone_number: "083110076083",
        address: "Citraland Megah Lt.2 No.8",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "sulaimanhasan",
        email: "sulaimanhasan@mail.com",
        fullname: "Sulaiman Hasan",
        phone_number: "087802113583",
        address: "Gesya Green Park Blok N No.4",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "abbayosua",
        email: "abbayosua@mail.com",
        fullname: "Abba Yosua Siagian",
        phone_number: "085767300929",
        address: "Legenda Malaka Blok J No.115",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "indrolie",
        email: "indrolie@mail.com",
        fullname: "Indro Lie",
        phone_number: "081266201378",
        address: "Baloi Mas Blok N No.256",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "ariebrainware",
        email: "ariebrainware@mail.com",
        fullname: "Muhammad Arie",
        phone_number: "082284117223",
        address: "Muka Kuning Pratama No.85",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "wondoindra",
        email: "wondoindra@mail.com",
        fullname: "Wondo Indra",
        phone_number: "083184210628",
        address: "Dian Centre No.12",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      },
      {
        username: "Jamaluddin",
        email: "jamale@mail.com",
        fullname: "Jamal Bin Marzuki",
        phone_number: "081348012826",
        address: "Mutiara View Blok C No.123",
        createdAt: new Date() + 7,
        updatedAt: new Date() + 7
      }
    ];

    await doEncryptPassword(userPassword, saltRounds).then(newPassword => {
      users[0].password = newPassword;
    });

    await doEncryptPassword(userPassword2, saltRounds).then(newPassword => {
      users[1].password = newPassword;
    });

    await doEncryptPassword(userPassword3, saltRounds).then(newPassword => {
      users[2].password = newPassword;
    });

    await doEncryptPassword(userPassword4, saltRounds).then(newPassword => {
      users[3].password = newPassword;
    });

    await doEncryptPassword(userPassword5, saltRounds).then(newPassword => {
      users[4].password = newPassword;
    });

    await doEncryptPassword(userPassword6, saltRounds).then(newPassword => {
      users[5].password = newPassword;
    });

    await doEncryptPassword(userPassword7, saltRounds).then(newPassword => {
      users[6].password = newPassword;
    });

    await doEncryptPassword(userPassword8, saltRounds).then(newPassword => {
      users[7].password = newPassword;
    });

    await doEncryptPassword(userPassword9, saltRounds).then(newPassword => {
      users[8].password = newPassword;
    });

    await doEncryptPassword(userPassword10, saltRounds).then(newPassword => {
      users[9].password = newPassword;
    });

    return queryInterface.bulkInsert("users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
