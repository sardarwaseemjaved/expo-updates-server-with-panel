/* eslint-disable no-undef */
// let db = connect('mongodb://admin:myPRODUCTIONPassword@localhost:27017/admin')
let db = connect('mongodb+srv://waseemj096:CjPNGHvnKmy2dsu2@cluster0.wjzx5.mongodb.net/admin')

db = db.getSiblingDB('expo')

db.createUser({
  user: 'expo',
  pwd: 'myRegularUserPassw',
  roles: [
    {
      role: 'readWrite',
      db: 'expo'
    }
  ]
})
