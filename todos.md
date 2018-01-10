#Base Mode
## SERVER
- [X] set up the server
    - [X] add routes, database pool
    - [X] ajaxs request, GET and POST

## DATABASE
- [x] create a database 'koala_holla'
    - [x] create a 'koala' table
        - [x] columns: id (SERIAL), name(VARCHAR 20), gender(VARCHAR 1), age(INT), ready_to_transer(VARCHAR3), notes(VARCHAR 255)
        - [x] insert current koala data
##CLIENT
- [X] ajax get/post
- [x] change gender field to selector
- [X] display Koalas on the DOM

#Hard Mode
## SERVER
- [ ] UPDATE request to change ready_to_transer from N to Y
- [ ] DELETE request to remove koalas from DB.

##CLIENT
- [ ] ajax PUT/DELETE
- [ ] add button for transfer and for delete
- [ ] add boostrap/styling