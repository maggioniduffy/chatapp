const users = []

const addUser = ({id, nombre, cuarto}) => {
    const name = nombre.trim().toLowerCase()
    const room = cuarto.trim().toLowerCase()
    console.log(name, room)
    let existingUser = false
    if(users.length > 0){
    existingUser = users.find(user => user.room === room && user.name === name)
}
    if(existingUser){
        return {error: 'Username is taken'}
    }

    const user = {id: id, name:name, room:room}
    console.log(user)
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index  !== -1){
        return users.splice(index, 1)[0]
    }
}
const getUser= (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) =>{
    return users.filter((user) => user.room === room)
}

module.exports = {addUser,removeUser,getUser,getUsersInRoom}
