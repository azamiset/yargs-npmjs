const yargs = require('yargs');
const { simpanContact, listContact, detailContact, deleteContact } = require('./contacts');

// 1. menambahkan data kedalam contacts.json
yargs.command({
  command: 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string',
    },
    noHP: {
      describe: 'Nomor Handphone',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    simpanContact(argv.nama, argv.email, argv.noHP);
  },
})
  .demandCommand();

// 2. menampilkan daftar semua nama & no hp contact
yargs.command({
  command: 'list',
  describe: 'Menampilkan semua nama & no HP contact.',
  handler() {
    listContact();
  }
});

// 3. menampilkan detail sebuah kontak
yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail sebuah contact berdasarkan nama.',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    detailContact(argv.nama);
  }
});

// 4. menghapus detail sebuah kontak
yargs.command({
  command: 'delete',
  describe: 'Menghapus sebuah contact berdasarkan nama.',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    deleteContact(argv.nama);
  }
});

yargs.parse();